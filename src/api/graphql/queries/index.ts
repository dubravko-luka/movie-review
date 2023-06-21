import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://3.24.152.19:8085/graphql',
  cache: new InMemoryCache(),
});

export default client;
