import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  return (
    <section className="products-section">
      <div className="section-heading">
        <div>
          <h2>Our Products</h2>
          <p>Choose from our available products</p>
        </div>

        <span className="products-count">{products.length} products</span>
      </div>

      <div className="products-grid">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProductList;
