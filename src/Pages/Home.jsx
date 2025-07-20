import React from "react";
import axios from "axios";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/PizzaBlock";
import { list, Sort } from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { Pagination } from "../components/Pagination";
import { SearchContext } from "../App";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );
  const sortType = sort.sortProperty;

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const changeCurrentPage = (id) => {
    dispatch(setCurrentPage(id));
  };

  const fetchPizzas = () => {
    setIsLoading(true);
    const order = sortType.includes("-") ? "desc" : "asc";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://67877bf5c4a42c916106edd2.mockapi.io/items?page=${currentPage}&limit=4&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sortType.replace("-", "")}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzas = items.map((obj, index) => <PizzaBlock {...obj} key={index} />);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            categoryIndex={categoryId}
            setCategoryIndex={onChangeCategory}
          />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas}
        </div>
        <Pagination
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
        />
      </div>
    </div>
  );
};
