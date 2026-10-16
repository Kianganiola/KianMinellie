import "./DrinkCard.css";

function DrinkCard({ drink, onAddToCart, isLoggedIn }) {
  return (
    <div className="drink-card">
      <div className="drink-image">
        <img src={drink.imageURL} alt={drink.name} />
      </div>
      <h3>{drink.name}</h3>
      <p className="price">₱{drink.price}.00</p>

      <button
        onClick={() => onAddToCart(drink)}
        disabled={!isLoggedIn}
        className={!isLoggedIn ? "disabled-btn" : ""}
      >
        {isLoggedIn ? "Add to Cart" : "Login to Order"}
      </button>
    </div>
  );
}

export default DrinkCard;
