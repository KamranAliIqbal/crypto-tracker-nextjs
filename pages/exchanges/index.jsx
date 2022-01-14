import { useEffect, useState } from "react";
import Header from "../components/Header";
import ExchangesData from "./ExchangesData";

function exchanges() {
  const [exchange, setExchange] = useState([]);

  const getExchanges = () => {
    fetch("https://api.coingecko.com/api/v3/exchanges")
      .then((res) => res.json())
      .then((data) => {
        setExchange(data);
      });
  };

  useEffect(() => {
    const data = getExchanges();
  }, []);

  if (!exchanges) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ul>
        {exchange.map(
          ({
            name,
            year_established: year,
            image,
            trust_score: score,
            trust_score_rank: rank,
          }) => (
            <ExchangesData name={name} year={year} rank={rank} image={image} />
          )
        )}
      </ul>
    </div>
  );
}

export default exchanges;
