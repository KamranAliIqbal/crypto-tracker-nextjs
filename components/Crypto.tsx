import Link from "next/link";

type CryptoProps = {
  name: string;
  symbol: string;
  price: number;
  image: string;
  mktcap: number;
  priceChangePercentage: number;
  mktrank: number;
};

const Crypto = ({
  name,
  symbol,
  price,
  image,
  mktcap,
  priceChangePercentage,
  mktrank,
}: CryptoProps) => {
  return (
    <div className="border-b border-gray-200 shadow ">
      <table className="table-fixed w-full">
        <thead className="bg-gray-800 hover:bg-gray-700">
          <tr>
            <th>{mktrank}</th>
            <th className="grid grid-cols-1 gap-4 place-items-center">
              <img className="rounded-full w-14 my-3" src={image} />
            </th>
            <th>{name}</th>
            <th>{symbol}</th>
            <th>{price}</th>

            <th
              className={
                priceChangePercentage < 0 ? "text-red-500" : "text-green-600"
              }
            >
              {priceChangePercentage}
            </th>
            <th>{mktcap}</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Crypto;
