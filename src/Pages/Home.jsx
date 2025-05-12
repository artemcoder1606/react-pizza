import React from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

<<<<<<< HEAD


export const Home = () => {

const [categoryActiveIndex, setCategoryActiveIndex] = React.useState(0)

  const [items, setItems] = React.useState([0]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch(`https://67877bf5c4a42c916106edd2.mockapi.io/items?${categoryActiveIndex !== 0 ? `category=${categoryActiveIndex}`: '' }` )
=======
export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://67877bf5c4a42c916106edd2.mockapi.io/items")
>>>>>>> 6f2951a7d5cf43af966180a7f100bd6e7ba3d367
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
<<<<<<< HEAD
  }, [categoryActiveIndex]);
=======
  }, []);
>>>>>>> 6f2951a7d5cf43af966180a7f100bd6e7ba3d367
  return (
    <>
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
<<<<<<< HEAD
            : items.map((obj, index) => <PizzaBlock key={index} {...obj} categoryIndex={categoryActiveIndex} setCategoryIndex= {(i) => setCategoryActiveIndex(i)}/>) 
          }
=======
            : items.map((obj, index) => <PizzaBlock key={index} {...obj} />)}
>>>>>>> 6f2951a7d5cf43af966180a7f100bd6e7ba3d367
        </div>
        </>
   
  );
};
