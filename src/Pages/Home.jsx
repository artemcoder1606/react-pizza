import React from "react";
import axios from "axios";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Sort } from "../components/Sort";
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/FilterSlice";
import { setCurrentPage } from "../redux/slices/FilterSlice";
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([0]);
  const [isLoading, setIsLoading] = React.useState(true);


  const categoryIndex = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);
  const pageNumber = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();

  const setCategoryIndex = (i) => {
    dispatch(setCategoryId(i));
  };

  const category = categoryIndex > 0 ? `category=${categoryIndex}` : "";
  const sortBy = `sortBy=${sortType.replace("-", "")}`;
  const order = `${sortType.includes("-") ? `order=asc` : `order=desc`}`;
  const search = `search=${searchValue}`;

  React.useEffect(() => {
    axios
      .get(
        `https://67877bf5c4a42c916106edd2.mockapi.io/items?${category}&${sortBy}&${order}&${search}&page=${pageNumber}&limit=4`
      )
      .then((result) => {
        setItems(result.data);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [categoryIndex, sortType, searchValue, pageNumber]);
  const skeleton = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj, index) => <PizzaBlock key={index} {...obj} />);
  const setPageNumber = (num) => {
    dispatch(setCurrentPage(num));
  }
  return (
    <>
      <div className="content__top">
        <Categories
          categoryIndex={categoryIndex}
          setCategoryIndex={(i) => setCategoryIndex(i)}
        />
        <Sort />
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
