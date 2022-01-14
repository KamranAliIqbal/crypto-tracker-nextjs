function ExchangesData({ name, country, year, score, rank, image }) {
  return (
    <div className="flex gap-5">
      <img src={image} />
      <p>{name}</p>
      <p>{year}</p>
      <p>{rank}</p>
    </div>
  );
}

export default ExchangesData;
