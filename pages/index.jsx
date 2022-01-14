import Crypto from "./components/Crypto";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";

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

  const filteredCoins = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="flex justify-center text-blue-900 ">
        {/* // store inpiut value in react state */}
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
          {/* // filter over cryptodata array before mapping 
          // name => name === searchinputvalue
          // features:
          // toLowerCase (irre)
          // search this even when whole name is not searched for */}

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
