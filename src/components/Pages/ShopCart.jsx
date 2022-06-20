import React from "react";
import Header from "../Header/Header";
import "./ShopCart.scss";
import ShopCard from "../ShopCard/ShopCard";

export default function ShopCart() {
  return (
    <>
      <Header/>
      <div className="shopCart">
        <div className="shopCart__header">
          <div className="shopCart__title">
            <img src="./img/greyCart.svg" alt="shopCart"/>
            <span>Корзина</span>
          </div>
          <div className="shopCart__remove">
            <img src="./img/trashBag.svg" alt="trashBag"/>
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="shopCart__container">
          <ShopCard/>
        </div>
        <div className="shopCart__footer">
          <div className="shopCart__amount">
            <div className="amount">
              <span>Всего пицц:</span>
              <b className="summary">3 шт.</b>
            </div>
            <div className="shopCart__price">
              <span>Сумма заказа:</span>
              <b className="price">900 ₽</b>
            </div>
          </div>
          <div className="btn btn_white">
            <img src="./img/back.svg" alt=""/>
            <span>Вернуться назад</span>
          </div>
          <div className="btn btn_buy">
            Оплатить сейчас
          </div>
        </div>
        <div className="emptyCart">
          <div className="emptyCart__title">
            <h2>Корзина пустая </h2>
            <img src="./img/smile.png" alt="smile"/>
          </div>
          <span className="emptyCart__text">Вероятней всего, вы не заказывали ещё пиццу.
Для того, чтобы заказать пиццу, перейди на главную страницу.
            </span>
          <img className="emptyCart__img" src="./img/bayer.svg" alt="bayer"/>
          <div className="btn btn_black">
            Вернуться назад
          </div>
        </div>
      </div>
    </>
  );
}