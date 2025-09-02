import React from "react";
import "./scss/app.scss";
import { Header } from "./components/header";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";
import { FullPizza } from "./Pages/FullPizza";


export const SearchContext = React.createContext("");

function App() {
  const [searchValue, setSearchValue] = React.useState("");
 

  return (
    <div className="wrapper">
     
      <SearchContext.Provider
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
              <Route path="/pizza/:id" element={<FullPizza />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
