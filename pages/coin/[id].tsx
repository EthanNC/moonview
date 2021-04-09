import Layout from "components/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useGetCandlestickQuery } from "src/generated/graphql";
import { useRouter } from "next/router";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CoinDetail = () => {
  const router = useRouter();
  const { id, days } = router.query;

  const [{ data: candleData, fetching, error }] = useGetCandlestickQuery({
    variables: {
      days: days?.toLocaleString(),
      id: id?.toLocaleString(),
      currency: "usd",
    },
  });
  // console.log(candleData)
  const initialState = {
    tooltip: {
      enabled: true,
      x: {
        format: "dd MMM hh:mm",
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: function (value: string) {
          return "$" + value;
        },
      },
    },
  };

  

  const [options] = useState(initialState);

  if (fetching)
    return (
      <Layout>
        <div className="text-center">
        fetching...
        </div>
      </Layout>
    );

    if (error)
    return (
      <Layout>
        <div className="text-center">
        Could not find coin. <button className="hover:underline" onClick={() => router.back}>Go back</button>
        </div>
      </Layout>
    );
  const titleUpper = id.toString().toUpperCase()
  return (
    <Layout title={`${titleUpper} | 🌙 MoonView`}>
      <div className="flex">
        <h1 className="p-2 uppercase font-bold">{id}</h1>
        <div className="flex flex-wrap space-x-2  justify-center">
          <button onClick={() => router.push(`/coin/${id}?days=1`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
            1D
          </button>
          <button onClick={() => router.push(`/coin/${id}?days=7`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
            7D
          </button>
          <button onClick={() => router.push(`/coin/${id}?days=14`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
            14D
          </button>
          <button onClick={() => router.push(`/coin/${id}?days=30`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
            1M
          </button>
          <button onClick={() => router.push(`/coin/${id}?days=90`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
            3M
          </button>
          <button onClick={() => router.push(`/coin/${id}?days=180`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
            6M
          </button>
          <button onClick={() => router.push(`/coin/${id}?days=365`)} className="bg-green hover:bg-green-dark font-bold py-2 px-4 -mr-1 rounded-lg rounded-l shadow">
           1Y
          </button>
        </div>
      </div>
      <Chart
        options={options}
        series={[{ data: candleData?.candlestick }]}
        type="candlestick"
        width={1000}
        height={640}
      />
    </Layout>
  );
};

export default CoinDetail;
