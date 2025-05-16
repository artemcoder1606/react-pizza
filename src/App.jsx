import React from "react";
import "./scss/app.scss";
import { Header } from "./components/header";
import { Home } from "./Pages/Home";
import { Routes, Route } from "react-router";
import { Cart } from "./Pages/Cart";
import { NotFound } from "./Pages/NotFound";





function App() {

  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
       <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <div className="container">
           <Routes>
             <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>} />
             <Route path="/cart" element={<Cart/> } />
             <Route path="*" element={<NotFound/> } />
           </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
