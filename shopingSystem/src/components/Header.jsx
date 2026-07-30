export default function Header() {
  return (
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
  );
}
