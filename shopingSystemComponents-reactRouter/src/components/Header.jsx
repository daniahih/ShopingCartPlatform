import { useCart } from "../context/CartContext";

function Header({ currentPage, setCurrentPage }) {
  const { cartCount } = useCart();

  return (
    <header className="store-header">
      <div className="header-content">
        <h1>TechStore</h1>
        <p>Find the technology you need</p>

        <nav className="page-nav" aria-label="Page navigation">
          <button
            type="button"
            className={`nav-button ${currentPage === "home" ? "active" : ""}`}
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>

          <button
            type="button"
            className={`nav-button ${currentPage === "about" ? "active" : ""}`}
            onClick={() => setCurrentPage("about")}
          >
            About Us
          </button>

          <button
            type="button"
            className={`nav-button ${currentPage === "login" ? "active" : ""}`}
            onClick={() => setCurrentPage("login")}
          >
            Login
          </button>
        </nav>
      </div>

      <div className="cart-badge">
        <span className="cart-icon">🛒</span>

        <span>
          Cart: {cartCount} {cartCount === 1 ? "item" : "items"}
        </span>
      </div>
    </header>
  );
}

export default Header;
