async function getMovies() {
  console.log(process.env.MY_URL);
  let res = await fetch(`${process.env.MY_URL}`, {
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
