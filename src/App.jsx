import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./scss/app.scss";
import { Header } from "./components/header";
import { Categories } from "./components/Categories";
import { PizzaBlock } from "./components/PizzaBlock";
import { Sort } from "./components/Sort";
import pizzas from "./assets/pizza.json"

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
         <Categories/>
        <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((obj, index) =>  <PizzaBlock key={index} {...obj}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
