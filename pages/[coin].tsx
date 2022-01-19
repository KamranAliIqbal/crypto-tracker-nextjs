import { useRouter } from "next/router";
import { useEffect } from "react";
import { COINGECKO_BASEURL } from "../consts";

async function getApiCoins(coinId: string) {
  console.log(coinId);
  const response = await fetch(`${COINGECKO_BASEURL}/coins/${coinId}`);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
}

export default function Coin() {
  const {
    query: { coin },
  } = useRouter();

  useEffect(() => {
    if (coin) getApiCoins(coin as string);
  }, []);

  return <div>{`${COINGECKO_BASEURL}/coins/${coin}`}</div>;
}
