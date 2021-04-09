import {
  createClient,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  Client,
} from "urql";
import { devtoolsExchange } from "@urql/devtools";
import { SSRExchange } from "@urql/core/dist/types/exchanges/ssr";
import { useMemo } from "react";
const isServerSide = typeof window === "undefined";
const ssrCache = ssrExchange({ isClient: !isServerSide });
const client = createClient({
  url: "http://localhost:3000/api/graphql",
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

interface ClientWithSsr {
  client: Client;
  ssr: SSRExchange;
}

let urqlClient: ClientWithSsr;

export function createUrqlClient(initialState?: Record<string, any>) {
  let nextClient = urqlClient;

  if (!nextClient) {
    const ssr = ssrExchange({
      isClient: !isServerSide,
    });

    const client = createClient({
      url: !isServerSide ? "/api/graphql" : "http://localhost:3000/api/graphql",
      fetchOptions: {
        credentials: "include",
      },
      exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
    });

    nextClient = { ssr, client };
  }

  if (initialState) {
    nextClient.ssr.restoreData(initialState);
  }

  // For SSG and SSR always create a new Apollo Client
  if (isServerSide) return nextClient;

  // Create the Apollo Client once in the client
  if (!urqlClient) {
    urqlClient = nextClient;
  }

  return nextClient;
}

export function useUrqlClient(initialState?: Record<string, any>) {
  const { client } = useMemo(() => createUrqlClient(initialState), [
    initialState,
  ]);
  return client;
}

export { client, ssrCache };
