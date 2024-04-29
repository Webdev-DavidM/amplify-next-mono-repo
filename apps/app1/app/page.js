async function getMovies() {
  let res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_PRACTICE_URL_SERVER_SIDE}`,
    {
      cache: 'no-cache',
    }
  );
  return res.json();
}

export default async function Index() {
  const { products } = await getMovies();
  return (
    <div>
      <h3>Movies</h3>
      {products &&
        products.map((product) => {
          return (
            <div key={product.id} product={product}>
              {product.description}
            </div>
          );
        })}
    </div>
  );
}
