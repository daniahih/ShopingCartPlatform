import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { products } from "./data/data";
import "./App.css";
import CartProvider from "./context/CartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <CartProvider>
        <Header />

        <main className="store-layout">
          <ProductList products={products} />

          <Cart />
        </main>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
