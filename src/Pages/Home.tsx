import React from "react";
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
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import { selectFilter } from "../redux/slices/filterSlice";
import { selectPizza } from "../redux/slices/pizzaSlice";

export const Home:React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage } = useSelector(
     selectFilter
  );
  const { items, status } = useSelector(selectPizza);

  const sortType = sort.sortProperty;

 //@ts-ignore
  const   { searchValue  } = React.useContext(SearchContext);

  const onChangeCategory = (id:number) => {
    dispatch(setCategoryId(id));
  };
  const changeCurrentPage = (id:number) => {
    dispatch(setCurrentPage(id));
  };

  const getPizzas = async () => {
    const order = sortType.includes("-") ? "desc" : "asc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = `${sortType}`.replace("-", "");

    dispatch(
      //@ts-ignore
      fetchPizzas({
        order,
        search,
        category,
        sortBy,
        currentPage,
      })
    );
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
      getPizzas();
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

  const pizzas = items.map((obj:any, index:number) => <PizzaBlock {...obj} key={index} />);

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
        {status === "failed" ? (
          <div className="content__error">
            <h2>
              По вашему запросу питс не найдено😕
            </h2>
            <p>
             Скорей всего, произошла какая-то чудовичная ошибка
            </p>
          </div>
        ) : (
          <div className="content__items">
            {status === "loading"
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : pizzas}
          </div>
        )}

        <Pagination
         //@ts-ignore
          currentPage={currentPage}
          changeCurrentPage={changeCurrentPage}
        />
      </div>
    </div>
  );
};
