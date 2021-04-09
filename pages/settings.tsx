import Layout from "components/Layout";
import { useGetPingQuery } from "src/generated/graphql";

const Settings = () => {
  const [{ data, fetching, error }] = useGetPingQuery();

  if (fetching) return <Layout>Fetching</Layout>;
  return (
    <Layout>
      <div className="flex p-4 space-x-2 font-semibold">
        <a className="hover:underline focus:outline-none" href="https://www.coingecko.com/en/api" target="none">CoinGecko API:</a>
        {data?.ping?.gecko_says === "(V3) To the Moon!" ? (
          <div className=" px-2 text-green-500 bg-green-100 rounded-md uppercase ">
            {" "}
            Online{" "}
          </div>
        ) : (
          <div className=" px-2 text-red-500 bg-red-100 rounded-md uppercase ">
            {" "}
            Offline{" "}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Settings;
