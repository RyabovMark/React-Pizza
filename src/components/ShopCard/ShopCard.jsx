import React from "react";
import "./ShopCard.scss";

export default function ShopCard() {
  return (
    <>
      <div className="shop-card">
        <div className="shop-card__logo">
          <img className="shop-card__pizzaLogo" src="/img/pizzaPhotos/1.png"
               alt="pizzaPhoto"/>
        </div>
        <div className="shop-card__descriptions">
          <h1>Чизбургер-пицца</h1>
          <span>тонкое тесто, 26 см.</span>
        </div>
        <div className="shop-card__amount">
          <img src="/img/cardMinus.svg" alt="cardMinus"/>
          <span>2</span>
          <img src="/img/cardPlus.svg" alt="cardPlus"/>
        </div>
        <span className="shop-card__price">770 ₽ </span>
        <img className="shop-card__remove" src="/img/cartRemove.png"
             alt="cardRemove"/>
      </div>
    </>
  );
}