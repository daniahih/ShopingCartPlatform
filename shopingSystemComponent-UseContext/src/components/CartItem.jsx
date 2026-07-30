function CartItem({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onRemoveItem,
}) {
  const subtotal = item.price * item.quantity;

  return (
    <article className="cart-item">
      <div className="cart-item-info">
        <img className="cart-item-image" src={item.image} alt={item.name} />

        <div>
          <h3>{item.name}</h3>

          <p className="cart-item-price">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            type="button"
            aria-label={`Decrease ${item.name} quantity`}
            onClick={() => {
              onDecreaseQuantity(item.id);
            }}
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            type="button"
            aria-label={`Increase ${item.name} quantity`}
            onClick={() => {
              onIncreaseQuantity(item.id);
            }}
          >
            +
          </button>
        </div>

        <strong className="item-subtotal">${subtotal.toFixed(2)}</strong>

        <button
          type="button"
          className="remove-button"
          onClick={() => {
            onRemoveItem(item.id);
          }}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default CartItem;
