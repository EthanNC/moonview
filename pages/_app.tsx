
import { Provider } from "urql";
import '../styles/global.css'
import { client, ssrCache } from "src/urqlClient";
import type { AppProps /*, AppContext */ } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}