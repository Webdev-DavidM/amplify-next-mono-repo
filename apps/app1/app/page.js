async function getMovies(url) {
  let res = await fetch(`${url}`, {
    cache: 'no-cache',
  });
  return res.json();
}

async function Trending() {
  const url = process.env.NEXT_PUBLIC_URL;
  let { products } = await getMovies(url);
  return (
    <div>
      <h3>Movies</h3>
      {products &&
        products.map((product) => {
          return <div key={product.id}>{product.id}</div>;
        })}
    </div>
  );
}
export default Trending;
