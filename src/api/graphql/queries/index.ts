import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { createHttpLink } from "apollo-link-http";

const proxyLink = new HttpLink({
  uri: 'http://app.reshare.com.au:8085/graphql',
  credentials: 'same-origin',
});

const client = new ApolloClient({
  link: proxyLink,
  cache: new InMemoryCache(),
});

export default client;
