import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>

      <div className="product-content">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <strong className="product-price">${product.price.toFixed(2)}</strong>

          <button
            type="button"
            className="add-button"
            onClick={() => {
              console.log("testing");

              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
