const Crypto = ({ name, symbol, price, image, mktcap }) => {
  return (
    <div className="flex gap-40 m-24 justify-center max-w-fit ">
      <img className="" width={150} src={image} />
      <p className="">{symbol}</p>
      <p className="">{name}</p>
      <p>{price}NOK</p>
      <p>{mktcap}</p>
    </div>
  );
};

export default Crypto;
