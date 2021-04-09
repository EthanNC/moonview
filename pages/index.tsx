// import Link from "next/link";
import Layout from "components/Layout";
import { client, ssrCache } from "src/urqlClient";
import {
  useGetMarketQuery,
  GetMarketDocument,
} from "src/generated/graphql";
import Link from "next/link"


const IndexPage = () => {
  const [{ data, fetching, error }] = useGetMarketQuery();
  if (fetching) return <Layout>fetching...</Layout>;
  if (error) return <Layout>Page Error. Please refresh</Layout>;
  

  return (
    <Layout title="Home | 🌙 MoonView">
      <table className="table w-full bg-white shadow rounded-lg my-4">
        <thead>
          <tr>
            <th className=" font-bold border-b-2 dark:border-dark-5 whitespace-nowrap text-gray-900">
              #
            </th>
            <th className=" font-bold border-b-2  dark:border-dark-5 whitespace-nowrap text-gray-900">
              Name
            </th>
            <th className=" font-bold border-b-2 dark:border-dark-5 whitespace-nowrap text-gray-900">
              Price
            </th>
            <th className=" font-bold border-b-2  dark:border-dark-5 whitespace-nowrap text-gray-900">
              24%
            </th>
            <th className=" font-bold border-b-2  dark:border-dark-5 whitespace-nowrap text-gray-900">
              Market Cap
            </th>
            <th className=" font-bold border-b-2  dark:border-dark-5 whitespace-nowrap text-gray-900">
              Total Volume
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.markets?.map((coin, i) => {
            return (
              <tr key={i} className="text-center">
                <td className="p-4 dark:border-dark-5">{i + 1}</td>
                <td className=" flex items-center space-x-4  p-4 dark:border-dark-5">
                <img className="w-8" src={coin?.image}/>
                  <Link href={`/coin/${coin?.id}?days=1`} prefetch={false}>
                  <a className="font-semibold">{coin?.name}</a>
                  </Link>
                  <span className="uppercase"> {coin?.symbol}</span>
                </td>
                <td className="p-4 dark:border-dark-5">
                  ${coin?.current_price}
                </td>
                <td className="p-4 dark:border-dark-5">
                  {coin?.price_change_percentage_24h}%
                </td>
                <td className="p-4 dark:border-dark-5">
                  {coin?.market_cap}
                </td>
                <td className="p-4 dark:border-dark-5">
                  {coin?.total_volume}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
};

export async function getStaticProps() {
  await client.query(GetMarketDocument).toPromise();
  return { props: { urqlState: ssrCache.extractData() }, revalidate: 3600 };
}

export default IndexPage;
