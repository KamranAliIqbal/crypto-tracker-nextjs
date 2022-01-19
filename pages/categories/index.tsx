import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/categories/list"
  );
  const data = await res.json();

  return {
    props: { categories: data },
  };
}

function category({ categories }: any) {
  return (
    <div className="flex">
      <Head>
        <title>Crypto | Categories </title>
      </Head>
      <div>
        <h1 className="">Categories</h1>
        {categories.map((categories: any) => (
          <div
            className="flex py-4 first:pt-0 last:pb-0"
            key={categories.category_id}
          >
            <a className="px-1.5 ml-3 overflow-hidden ">
              <h3 className="text-sm font-medium text-white-900  	">
                {categories.name}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default category;
