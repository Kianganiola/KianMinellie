import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, setIsLoggedIn, cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Sip Society</h1>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Menu
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>

        <button
          className="login-btn"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
