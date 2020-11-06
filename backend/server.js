require("dotenv").config();
const express = require("express");
const logger = require("morgan");
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const resolvers = require("./resolvers/formResolver");
const typeDefs = require("./schema/form");
const { App, LogLevel } = require("@slack/bolt");

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
  .then(() => console.log("successfully connected to MongoDB"))
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

const slackApp = new App({
  token: "xoxb-1468039943731-1468145619378-1mN9jRKCNDFTtOLDRGhS6ALI",
  signingSecret: "ddd54f2f37a5af3835d4dac6897fe972",
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG,
});

async function findConversation(name) {
  try {
    // Call the conversations.list method using the built-in WebClient
    const result = await slackApp.client.conversations.list({
      // The token you used to initialize your app
      token: "xoxb-1468039943731-1468145619378-1mN9jRKCNDFTtOLDRGhS6ALI",
    });

    for (const channel of result.channels) {
      if (channel.name === name) {
        conversationId = channel.id;

        // Print result
        console.log("Found conversation ID: " + conversationId);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
findConversation("formenvoy-support");

(async () => {
  // Start your app
  await slackApp.start(4000);

  console.log("⚡️ Bolt app is running!");
})();

app.listen({ port: PORT }, () => {
  console.log(`🚀🚀🚀 App is ready on PORT: ${PORT}`);
});
