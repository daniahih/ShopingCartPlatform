import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    description:
      "Comfortable wireless headphones with clear sound and long battery life.",
    price: 120,
    image: "https://placehold.co/500x320/e5e7eb/6b7280?text=Headphones",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    description:
      "A responsive mechanical keyboard designed for work and gaming.",
    price: 80,
    image: "https://placehold.co/500x320/e5e7eb/6b7280?text=Keyboard",
  },
  {
    id: 3,
    name: "Wireless Mouse",
    category: "Accessories",
    description: "A lightweight wireless mouse with precise tracking.",
    price: 40,
    image: "https://placehold.co/500x320/e5e7eb/6b7280?text=Mouse",
  },
];

function App() {
  /*
    Load the cart only when the initial state is created.
  */
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      return JSON.parse(savedCart);
    }

    return [];
  });

  function addToCart(product) {
    setCart((currentCart) => {
      return [...currentCart, product];
    });
  }

  function removeFromCart(productIndex) {
    setCart((currentCart) => {
      return currentCart.filter((item, index) => {
        return index !== productIndex;
      });
    });
  }

  /*
    Save the cart every time the cart state changes.
  */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="app">
      <Header cartCount={cart.length} />

      <main className="store-layout">
        <ProductList products={products} onAddToCart={addToCart} />

        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
      </main>
    </div>
  );
}

export default App;
