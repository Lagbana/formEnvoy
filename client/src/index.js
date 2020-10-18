import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client'

const GITHUB_BASE_URL = 'http://localhost:8080/graphql'
const cache = new InMemoryCache({})

const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  credentials: 'include'
})


const client = new ApolloClient({
  link: httpLink, 
  cache
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
