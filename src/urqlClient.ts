import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Client,
} from "urql";
import { devtoolsExchange } from "@urql/devtools";
const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });
const isDev = process.env.NODE_ENV === "development";


const uri = isDev
    ? 'http://localhost:3000/api/graphql':
    'https://moonview.vercel.app/api/graphql'

const client = createClient({
  url: uri,
  exchanges: [
    devtoolsExchange,
    dedupExchange,
    cacheExchange,
    ssrCache,
    fetchExchange,
  ],
  fetchOptions: () => {
    return { headers: {} };
  },
});

export { client, ssrCache };
