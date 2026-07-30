function Cart({ cart, onRemoveFromCart }) {
  return (
    <aside className="cart-panel">
      <div className="cart-title">
        <div>
          <h2>Your Cart</h2>
          <p>Review your selected products</p>
        </div>

        <span className="cart-count">{cart.length}</span>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

          <h3>Your cart is empty</h3>

          <p>Add products from the store to see them here.</p>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => {
            return (
              <article className="simple-cart-item" key={`${item.id}-${index}`}>
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                </div>

                <button
                  type="button"
                  className="remove-button"
                  onClick={() => {
                    onRemoveFromCart(index);
                  }}
                >
                  Remove
                </button>
              </article>
            );
          })}
        </div>
      )}
    </aside>
  );
}

export default Cart;
