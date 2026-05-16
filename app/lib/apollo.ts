
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_URI;
const cache = new InMemoryCache();
const link = new HttpLink({ uri: uri, });

export const client = new ApolloClient({
  cache: cache,
  link: link,

});