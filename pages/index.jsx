import Crypto from "./components/Crypto";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { matchSorter } from "match-sorter";

export default function Home() {
  const [cryptoData, setCryptoData] = useState([]);

  const [search, setSearch] = useState("");

  const getApi = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=nok")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCryptoData(data);
      });
  };

  useEffect(() => {
    const data = getApi();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = matchSorter(cryptoData, search, {
    keys: ["name", "market_cap", "current_price"],
  }).sort((a, b) => b.market_cap - a.market_cap);

  return (
    <div>
      <div className="flex justify-center text-blue-900 ">
        <input
          className="w-3/12 rounded-lg"
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={search}
        />
      </div>
      <div>
        <ul>
          {filteredCoins.map(
            (
              { name, symbol, image, current_price: price, market_cap: mktcap },
              key
            ) => (
              <Crypto
                name={name}
                image={image}
                key={key}
                symbol={symbol}
                price={price}
                mktcap={mktcap}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
}
