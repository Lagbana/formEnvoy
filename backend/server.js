// import 'reflect-metadata'
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
// const compression = require('compression')
const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server-express')
// const cors = require('cors')
const formResolver = require('./resolvers/formResolver')
const typeDefs = require('./schema/form')

// Initialize the express application
const app = express()

// Set up the middlewares
// app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// // Set up cookie parser middleware
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true
//   })
// )

// const config = {
//   port: Number(process.env.PORT) || 8080
// }


  // Connect to mongoDB database running remotely or locally during development
  // Specify mongoDB connection option booleans
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/formenvoy',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )

  const server = new ApolloServer({
    typeDefs,
    resolvers: formResolver,
    context: ({ req, res }) => ({ req, res }),
    engine: {
      reportSchema: true,
      variant: 'current'
    }
  })

server.applyMiddleware({ app })
  
console.log(server.graphqlPath)


  app.listen({port: 8080}, () => {
    console.log(`App ready on http://localhost:8080${server.graphqlPath}`)
  })



