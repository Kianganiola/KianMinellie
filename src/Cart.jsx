import { useState } from "react";
import "./Cart.css";

function Cart({ cart, clearCart, removeFromCart }) {
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    clearCart();
    setTimeout(() => setCheckoutSuccess(false), 3000);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2>My Cart</h2>

      {cart.length === 0 && !checkoutSuccess && (
        <p className="empty-msg">Your cart is empty. Add some drinks!</p>
      )}

      {cart.length > 0 && !checkoutSuccess && (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <div className="cart-item-info">
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-details">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">₱{item.price}.00</span>
                  </div>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeFromCart(index)}
                >
                  ✕ Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>Total: ₱{total}.00</h3>
            <div className="action-btns">
              <button className="clear-btn" onClick={clearCart}>
                Clear All
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}

      {checkoutSuccess && (
        <div className="success-msg">
          Order Placed Successfully! Enjoy your drink!
        </div>
      )}
    </div>
  );
}

export default Cart;
