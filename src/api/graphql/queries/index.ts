import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.reshare.com.au/graphql',
  cache: new InMemoryCache(),
});

export default client;
