import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Cart from "./Cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notification, setNotification] = useState("");

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    document.title = `Cart: ${cart.length} item(s)`;
  }, [cart]);

  const addToCart = (drink) => {
    setCart([...cart, drink]);
    setNotification(`🧋 "${drink.name}" added to cart!`);

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          cartCount={cart.length}
        />

        {notification && (
          <div className="toast-notification">{notification}</div>
        )}

        <main className="main-content">
          <Routes>
            <Route
              path="/cart"
              element={
                isLoggedIn ? (
                  <Cart
                    cart={cart}
                    clearCart={clearCart}
                    removeFromCart={removeFromCart}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/"
              element={<Menu addToCart={addToCart} isLoggedIn={isLoggedIn} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
