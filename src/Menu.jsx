import DrinkCard from "./DrinkCard";
import "./Menu.css";

function Menu({ addToCart, isLoggedIn }) {
  const drinks = [
    {
      id: 1,
      name: "Classic Pearl Milk Tea",
      price: 120,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOGHZmBDotQjmJeotYy1YD6sDLbBC0dEVcbH-4Zz2sFPV_k78LhglZQa1&s=10",
    },
    {
      id: 2,
      name: "Taro Milk Tea",
      price: 130,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiduZ-OeZly0N0YsutGD9AcTuVOhofFqxTFRJTp7D6MrM9n60EL8kaO58&s=10",
    },
    {
      id: 3,
      name: "Matcha Latte",
      price: 140,
      imageURL:
        "https://media.istockphoto.com/id/2211609783/photo/ice-matcha-latte-green-tea-on-plastic-glass-isolated-white-background.jpg?s=612x612&w=0&k=20&c=Cqh8e5eVBaxl1KrCi4thTpwza4hUk5in-qQZLTfIG8o=",
    },
    {
      id: 4,
      name: "Brown Sugar Boba",
      price: 150,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYraMTG4laZBP4iWFd1D0-aGMBksIsGbsusGLrxBH7inQghAYsGuqKIx35&s=10",
    },
    {
      id: 5,
      name: "Pandan",
      price: 150,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLeLxyJoFz9jvH-E1DI7xhqZdCpALTXG4xYpBFC0tk-A&s=10",
    },
    {
      id: 6,
      name: "Oreo Cheesecake",
      price: 150,
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkFRkCAEftkqxOF_iasUHSEF5pDmVdJgOtdMQbA0H7w&s=10",
    },
  ];

  return (
    <div className="menu-page-container">
      <aside className="menu-sidebar">
        <h2 className="sidebar-title">MENU</h2>
        <ul className="category-list">
          <li className="active">MILK TEA</li>
        </ul>
      </aside>

      <section className="menu-main">
        <p className="login-status-msg">
          {isLoggedIn
            ? "Select your favorite drink to add to cart!"
            : "Please Login to add drinks to your cart!"}
        </p>

        <div className="drink-grid">
          {drinks.map((drink) => (
            <DrinkCard
              key={drink.id}
              drink={drink}
              onAddToCart={addToCart}
              isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
