import React from 'react';
import Routes from './routes'
import './global.css'
import {ApolloProvider, createHttpLink, InMemoryCache, ApolloClient, defaultDataIdFromObject } from '@apollo/client';
import Page from './container/Page';

const httplink = new createHttpLink({uri:'https://countries-274616.ew.r.appspot.com'})
const cache = new InMemoryCache({
  dataIdFromObject(responseObject) {
    if (responseObject.__typename === 'Country') {
      return `${responseObject.__typename}-${responseObject._id}`;
    }
    return defaultDataIdFromObject(responseObject)
  }
});
const client = new ApolloClient({link:httplink,cache:cache});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Routes/>
      </Page>
    </ApolloProvider>
  );
}

