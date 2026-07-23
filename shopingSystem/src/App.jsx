import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="store-header">
        <div>
          <h1>TechStore</h1>
          <p>Find the technology you need</p>
        </div>

        <div className="cart-badge">
          <span>🛒</span>
          <span>Cart: 0 items</span>
        </div>
      </header>

      <main className="store-layout">
        <section className="products-section">
          <div className="section-heading">
            <div>
              <h2>Our Products</h2>
              <p>Choose from our available products</p>
            </div>

            <span>3 products</span>
          </div>

          <div className="products-grid">
            {/* Product 1 */}
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
                  Comfortable wireless headphones with clear sound and long
                  battery life.
                </p>

                <div className="product-footer">
                  <strong className="product-price">$120.00</strong>

                  <button type="button" className="add-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 2 */}
            <article className="product-card">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uU_UI6036pmvzir8o4nbDlw4pb8D5BLdE-4SDrbfOw&s=10"
                  alt="Mechanical keyboard"
                />
              </div>

              <div className="product-content">
                <span className="product-category">Accessories</span>

                <h3>Mechanical Keyboard</h3>

                <p className="product-description">
                  A responsive mechanical keyboard designed for work and gaming.
                </p>

                <div className="product-footer">
                  <strong className="product-price">$80.00</strong>

                  <button type="button" className="add-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>

            {/* Product 3 */}
            <article className="product-card">
              <div className="product-image-container">
                <img
                  className="product-image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStgyoLq01wc-BBl1iePRYN54UPuaVh9s1EpwfQd02LlGX1Jp4IqE9Glam&s=10"
                  alt="Wireless mouse"
                />
              </div>

              <div className="product-content">
                <span className="product-category">Accessories</span>

                <h3>Wireless Mouse</h3>

                <p className="product-description">
                  A lightweight wireless mouse with precise tracking and a
                  comfortable design.
                </p>

                <div className="product-footer">
                  <strong className="product-price">$40.00</strong>

                  <button type="button" className="add-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>

        <aside className="cart-panel">
          <div className="cart-title">
            <div>
              <h2>Your Cart</h2>
              <p>Review your selected products</p>
            </div>

            <span className="cart-count">0</span>
          </div>

          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>

            <h3>Your cart is empty</h3>

            <p>Add products from the store to see them here.</p>
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Total products</span>
              <span>0</span>
            </div>

            <div className="summary-row total-row">
              <span>Total</span>
              <strong>$0.00</strong>
            </div>

            <button type="button" className="checkout-button" disabled>
              Checkout
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
