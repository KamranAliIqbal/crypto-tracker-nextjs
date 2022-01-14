import { useEffect, useState } from "react";
import Head from "next/head";
import NetworksData from "./networksData";

function networks() {
  const [networks, setNetworks] = useState([]);

  const getNetworks = () => {
    fetch("https://api.coingecko.com/api/v3/asset_platforms")
      .then((res) => res.json())
      .then((data) => {
        setNetworks(data);
      });
  };

  useEffect(() => {
    const data = getNetworks();
  }, []);

  if (!networks) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>Crypto | Blockchain Networks</title>
      </Head>
      <NetworksData />
      <ul>
        {networks.map(({ name }) => (
          <NetworksData name={name} />
        ))}
      </ul>
    </div>
  );
}

export default networks;
