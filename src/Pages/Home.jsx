import React, { useState } from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";

export const Home = ({ searchValue, setSearchValue }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [items, setItems] = React.useState([0]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSortItem, setActiveSortItem] = React.useState({
    name: "популярности(DESC)",
    sortProperty: "rating",
  });

  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  const sortBy = `sortBy=${activeSortItem.sortProperty.replace("-", "")}`;
  const order = `${
    activeSortItem.sortProperty.includes("-") ? `order=asc` : `order=desc`
  }`;

  React.useEffect(() => {
    fetch(
      `https://67877bf5c4a42c916106edd2.mockapi.io/items?${category}&${sortBy}&${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, [categoryIndex, activeSortItem, searchValue]);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items
    .filter((obj) => {
      if (obj && obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((obj, index) => <PizzaBlock key={index} {...obj} />);
  return (
    <>
      <div className="content__top">
        <Categories
          categoryIndex={categoryIndex}
          setCategoryIndex={(i) => setCategoryIndex(i)}
        />
        <Sort
          value={activeSortItem}
          setActiveSortItem={(i) => setActiveSortItem(i)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
    </>
  );
};
