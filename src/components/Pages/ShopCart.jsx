import React from "react";
import "./ShopCart.scss";
import ShopCard from "../ShopCard/ShopCard";
import {Link} from "react-router-dom";

export default function ShopCart() {
  return (
    <div className="shop-cart">
      <div className="shop-cart__container">
        <div className="shop-cart__header">
          <div className="shop-cart__title">
            <img src="/img/greyCart.svg" alt="shopCart"/>
            <span>Корзина</span>
          </div>
          <div className="shop-cart__remove">
            <img src="/img/trashBag.svg" alt="trashBag"/>
            <span>Очистить корзину</span>
          </div>
        </div>
        <ShopCard/>
        <div className="shop-cart__footer">
          <div className="shop-cart__amount">
            <div className="amount">
              <span>Всего пицц:</span>
              <b className="summary">3 шт.</b>
            </div>
            <div className="shop-cart__price">
              <span>Сумма заказа:</span>
              <b className="price">900 ₽</b>
            </div>
          </div>
          <Link to='/'>
            <div className="btn btn_white">
              <img src="/img/back.svg" alt=""/>
              <span>Вернуться назад</span>
            </div>
          </Link>
          <div className="btn btn_buy">
            Оплатит сейчас
          </div>
        </div>
        <div className="empty-cart">
          <div className="empty-cart__title">
            <h2>Корзина пустая </h2>
            <img src="/img/smile.png" alt="smile"/>
          </div>
          <span className="empty-cart__text">Вероятней всего, вы не заказывали ещё пиццу.
Для того, чтобы заказать пиццу, перейди на главную страницу.
            </span>
          <img className="empty-cart__img" src="/img/bayer.svg" alt="bayer"/>
          <Link to='/'>
            <div className="btn btn_black">
              Вернуться назад
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}