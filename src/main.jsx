import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App.jsx'
import './index.css'
console.log("import.meta.env.API_URL", import.meta.env.VITE_SERVER_BASE_URL)
const client = new ApolloClient({
  uri: import.meta.env.VITE_SERVER_BASE_URL + '/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
