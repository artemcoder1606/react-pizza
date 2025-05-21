import React from "react";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination";
import {SearchContext} from '../App';


export const Home = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [items, setItems] = React.useState([0]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSortItem, setActiveSortItem] = React.useState({
    name: "популярности(DESC)",
    sortProperty: "rating",
  });
  const [pageNumber, setPageNumber] = React.useState(1);

  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  const sortBy = `sortBy=${activeSortItem.sortProperty.replace("-", "")}`;
  const order = `${
    activeSortItem.sortProperty.includes("-") ? `order=asc` : `order=desc`
  }`;
  const search = `search=${searchValue}`;

  React.useEffect(() => {
    fetch(
      `https://67877bf5c4a42c916106edd2.mockapi.io/items?${category}&${sortBy}&${order}&${search}&page=${pageNumber}&limit=4`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, activeSortItem, searchValue, pageNumber]);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj, index) => <PizzaBlock key={index} {...obj} />);
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
      <Pagination
        pageCount={pageNumber}
        setPageNumber={(num) => setPageNumber(num)}
      />
    </>
  );
};
