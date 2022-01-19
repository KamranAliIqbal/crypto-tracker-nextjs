import { useEffect, useState } from "react";
import Head from "next/head";
import DefiArticles from "./DefiArticles";
import useSWR from "swr";

const person = [
  {
    name: "nikolai",
    age: 21,
    corona: true,
  },
];

function defi() {
  const [defi, setDefi] = useState();

  const getDefiData = () => {
    fetch("https://api.coingecko.com/api/v3/global/decentralized_finance_defi")
      .then((res) => res.json())
      .then((data) => {
        setDefi(data);
      });
  };

  // useEffect(() => {
  //   const data = getDefiData();
  // }, []);

  const { data, error } = useSWR("defi", getDefiData);

  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;
  return <div>{data}</div>;

  return (
    <>
      <Head>
        <title>Crypto | Defi</title>
      </Head>

      <DefiArticles />
      <div className="p-4">
        <h1 className="">{defi.data.top_coin_name}</h1>
        <p>Market cap: {defi.data.eth_market_cap}</p>
      </div>
    </>
  );
}

export default defi;

// for å displaye all dataen fra objectet. Men som regel bruker man å hente dataen individuelt fra object fordi du vet hvilke data du er ute etter.

{
  /* {Object.keys(defi.data).map((key) => (
  <h1>
    {key}:{defi.data[key]}
  </h1>
))} */
}
