require("dotenv").config();
const express = require("express");
const logger = require("morgan");
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers/formResolver");
const typeDefs = require("./schema/form");

// Initialize the express application
const app = express();
const PORT = process.env.PORT;

// Set up the middlewares
app.use(logger("tiny"));
// app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to mongoDB database running remotely or locally during development
// Specify mongoDB connection option booleans
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((conection) => console.log("successfully connected to MongoDB"))
  .catch((error) => console.log(error.message));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({ req, res }),
  engine: {
    reportSchema: true,
    variant: "current",
  },
  formatError: (err) => {
    // Don't give the specific errors to the client.
    console.log(err);
    // Otherwise return the original error.  The error can also
    // be manipulated in other ways, so long as it's returned.
    console.log(err.extensions.exception);
    return err;
  },
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(`🚀🚀🚀 App is ready on PORT: ${PORT}`);
});
