export default function ProductCard() {
  return (
    <>
      <article className="product-card">
        <div className="product-image-container">
          <img
            className="product-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zc86eb8oIu4eOwyIRNcCoPuxNAWf-W1EHw9y5Ro0ew&s=10"
            alt="Wireless headphones"
          />
        </div>

        <div className="product-content">
          <span className="product-category">Electronics</span>

          <h3>Wireless Headphones</h3>

          <p className="product-description">
            Comfortable wireless headphones with clear sound and long battery
            life.
          </p>

          <div className="product-footer">
            <strong className="product-price">$120.00</strong>

            <button type="button" className="add-button">
              Add to Cart
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
