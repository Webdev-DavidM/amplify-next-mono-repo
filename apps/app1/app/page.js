async function getMovies() {
  let res = await fetch(`https://dummyjson.com/products`, {
    cache: 'no-cache',
  });
  return res.json();
}

async function Trending() {
  let { products } = await getMovies();
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
