import React from "react";
import imageUrl from '../img/empty-cart.png'
import { Link } from "react-router";


export const CartEmpty = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая😕
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={imageUrl} alt="Empty cart" />
      <Link to='/' className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
