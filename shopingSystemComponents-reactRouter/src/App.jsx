import { useState } from "react";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import CartProvider from "./context/CartContext";
import { products } from "./data/data";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <CartProvider>
      <div className="app">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <main className="page-content">
          {currentPage === "home" ? (
            <div className="store-layout">
              <ProductList products={products} />
              <Cart />
            </div>
          ) : currentPage === "about" ? (
            <AboutUs />
          ) : (
            <Login />
          )}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
