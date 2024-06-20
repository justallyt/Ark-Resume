import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
     uri: 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxm2okmp01ur07uvb8hwgq7l/master',
     cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ApolloProvider client={client}>
                <BrowserRouter>
                      <App />
                </BrowserRouter>
        </ApolloProvider>
  </React.StrictMode>,
)
