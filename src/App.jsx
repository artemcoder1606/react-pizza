import React from "react";
import "./scss/app.scss";
import { Header } from "./components/header";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import { Routes, Route } from "react-router";
import { NotFound } from "./Pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
