
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/" });

export const client = new ApolloClient({
  cache: cache,
  link: link,

});