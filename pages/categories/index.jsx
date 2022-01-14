export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/categories/list"
  );
  const data = await res.json();

  return {
    props: { categories: data },
  };
}

function category({ categories }) {
  return (
    <div>
      <h1>Categories</h1>
      {categories.map((categories) => (
        <div key={categories.category_id}>
          <a>
            <h3> {categories.name} </h3>
          </a>
        </div>
      ))}
    </div>
  );
}

export default category;
