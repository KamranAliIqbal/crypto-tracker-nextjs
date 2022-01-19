import Crypto from "../components/Crypto";
import React, { useState, useEffect } from "react";
import { matchSorter } from "match-sorter";
import Head from "next/head";
import useSWR from "swr";
import { ApiCoinType } from "../types/ApiCoinType";
import Link from "next/link";

async function getApiCoins() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=nok"
  );
  return await response.json();
}

export default function Home() {
  const { data, error } = useSWR<ApiCoinType[]>("coins", getApiCoins);

  const [search, setSearch] = useState("");

  if (error) return <div>Failed to load...</div>;
  if (!data) return <div>Loading...</div>;

  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredCoins = matchSorter(data, search, {
    keys: ["name", "market_cap", "current_price"],
  }).sort((a: any, b: any) => b.market_cap - a.market_cap);

  return (
    <div>
      <Head>
        <title>Crypto | Home</title>
      </Head>

      <div className="flex justify-center p-4 text-blue-900 ">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-1/3 border 
          border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search  ..."
          type="text"
          name="search"
          onChange={handleChange}
          value={search}
        />
      </div>

      <div className="bg-lime-600 shadow p-8 m-9 border rounded mt-2 bg-light">
        <ul>
          {filteredCoins.map(
            (
              {
                name,
                symbol,
                image,
                current_price: price,
                market_cap: mktcap,
                price_change_percentage_24h: priceChangePercentage,
                market_cap_rank: mktrank,
                id,
              },
              key
            ) => (
              <Link href={`/${id}`} key={id}>
                <a>
                  <Crypto
                    name={name}
                    image={image}
                    key={key}
                    symbol={symbol}
                    price={price}
                    priceChangePercentage={priceChangePercentage}
                    mktcap={mktcap}
                    mktrank={mktrank}
                  />
                </a>
              </Link>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

//Fetching data with getServerSideProps

// export async function getServerSideProps() {
//   const response = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=nok"
//   );

//   const cryptoData = await response.json();

//   return {
//     props: { data: cryptoData },
//   };
// }
