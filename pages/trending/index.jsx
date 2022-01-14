import { useEffect, useState } from "react";
import Header from "../components/Header";
import TrendingData from "./TrendingData";

function trendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const getTrendingCoins = () => {
    fetch("https://api.coingecko.com/api/v3/search/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrendingCoins(data.coins);
      });
  };

  useEffect(() => {
    const data = getTrendingCoins();
  }, []);

  if (trendingCoins.length === 0) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <ul>
        {trendingCoins.map(({ item: { name, symbol } }, key) => (
          <TrendingData name={name} key={key} symbol={symbol} />
        ))}
      </ul>
    </div>
  );
}

export default trendingCoins;
