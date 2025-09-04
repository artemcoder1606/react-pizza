import React from "react";
import "./scss/app.scss";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";
import { MainLayout } from "./layouts/MainLayout";
import { FullPizza } from "./Pages/FullPizza";

// type for context
type SearchContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

// default value (can be null or initial state)
export const SearchContext = React.createContext<SearchContextType | null>(null);

function App() {
  const [searchValue, setSearchValue] = React.useState("");

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
