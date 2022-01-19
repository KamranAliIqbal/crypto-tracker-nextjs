function ExchangesData({ name, country, year, score, rank, image }) {
  return (
    <table className="table-fixed w-10/12">
      <thead>
        <tr>
          <th>
            <img className="rounded-full w-14" src={image} />
          </th>
          <th>{name}</th>
          <th>{country}</th>
          <th>{year}</th>
          <th>{rank}</th>
        </tr>
      </thead>
    </table>
  );
}

export default ExchangesData;
