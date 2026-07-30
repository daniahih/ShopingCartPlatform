export default function Cart() {
  return (
    <>
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
    </>
  );
}
