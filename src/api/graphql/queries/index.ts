import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://app.reshare.com.au:8085/graphql',
  cache: new InMemoryCache(),
});

export default client;
