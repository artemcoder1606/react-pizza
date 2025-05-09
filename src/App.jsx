import React from "react";
import "./scss/app.scss";
import { Header } from "./components/header";
import { Categories } from "./components/Categories";
import { PizzaBlock } from "./components/PizzaBlock/index";
import { Sort } from "./components/Sort";
import Skeleton from "./components/PizzaBlocK/Skeleton";

function App() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://67877bf5c4a42c916106edd2.mockapi.io/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false )
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
            {isLoading ? (
              [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              
            ) : (
              items.map((obj, index) => <PizzaBlock key={index} {...obj} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
