import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://178.128.58.29/v1alpha1/graphql"
});

export default client;
