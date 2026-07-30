import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  // console.log("testing", index);

  console.log(cart);

  return (
    <header className="store-header">
      <div className="header-content">
        <h1>TechStore</h1>
        <p>Find the technology you need</p>
      </div>

      <div className="cart-badge">
        <span className="cart-icon">🛒</span>

        <span>
          Cart: {cart.length} {cart.length === 1 ? "item" : "items"}
        </span>
      </div>
    </header>
  );
}

export default Header;
