import React, { useState } from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";



export const Home = () => {

  const [categoryIndex, setCategoryIndex] = useState(0)
  const [items, setItems] = React.useState([0]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`https://67877bf5c4a42c916106edd2.mockapi.io/items?${categoryIndex > 0 ? `category=${categoryIndex}` : ''} ` )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryIndex]);
  return (
    <>
        <div className="content__top">
          <Categories categoryIndex={categoryIndex} setCategoryIndex={(i) => setCategoryIndex(i)} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj, index) => <PizzaBlock key={index} {...obj} />) 
          }
        </div>
        </>
   
  );
};
