import Layout from "components/Layout";
import { useGetTrendingQuery } from "src/generated/graphql";
import Link from "next/link"

const Trending = () => {
  const [{ data, fetching }] = useGetTrendingQuery();
  console.log(data);
  if (fetching) return <Layout>fetching</Layout>;
  const trending = data?.trending;
  return (
    <Layout title=" Trending | 🌙 MoonView">
      <div className="text-center">
        <div className="flex flex-wrap overflow-hidden sm:-mx-4">
          {trending?.coins?.map((coin) => {
            return (
              <div className="w-1/3 overflow-hidden sm:my-4 sm:p-4">
                <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <img
                    className="object-cover w-full max-h-40"
                    src={coin?.item?.large}
                    alt="avatar"
                  />

                  <div className="py-5 text-center">
                    <Link href={`/coin/${coin?.item?.id}?days=1`}>
                    <a
                      className="block text-2xl font-bold text-gray-800 dark:text-white"
                    >
                      {coin?.item?.name}
                    </a>
                    </Link>
                    <span className="text-sm text-gray-700 dark:text-gray-200">
                      {coin?.item?.symbol}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Trending;
