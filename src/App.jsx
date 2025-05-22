import React from "react";
import "./scss/app.scss";
import { Header } from "./components/header";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/FilterSlice";

export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
      {/* <SearchContext.Provider
        value={{searchValue, setSearchValue}}
      >
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <Home />
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider> */}
    </div>
  );
}

export default App;
