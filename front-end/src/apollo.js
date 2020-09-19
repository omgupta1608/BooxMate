import ApolloClient from 'apollo-boost';

var port = 3200;
export default new ApolloClient({
  uri: `http://localhost:${port}/graphql`,
});