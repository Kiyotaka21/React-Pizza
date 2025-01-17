import Header from "./components/Header/Header";
import "./scss/app.scss";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://678aaab2dd587da7ac2b07b5.mockapi.io/pizzas")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((pizzaObj) => (
              <PizzaBlock key={pizzaObj.id} {...pizzaObj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
