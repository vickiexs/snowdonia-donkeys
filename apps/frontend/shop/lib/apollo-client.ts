import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { DEV } from "./constants";

const uri =
  process.env.ENV_NAME === DEV
    ? process.env.NEXT_PUBLIC_STRAPI_ENDPOINT_URL_LOCAL
    : process.env.NEXT_PUBLIC_STRAPI_ENDPOINT_URL;

const token =
  process.env.ENV_NAME === DEV
    ? process.env.STRAPI_API_TOKEN_LOCAL
    : process.env.STRAPI_API_TOKEN;

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: uri,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
