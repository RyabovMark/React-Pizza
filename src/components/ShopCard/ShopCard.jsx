import React from "react";
import "./ShopCard.scss";

export default function ShopCard() {
  return (
    <div className="shopCard">
      <img src="/img/pizzaPhotos/1.png" alt="pizzaPhoto"/>
      <div className="shopCard__descriptions">
        <h1>Чизбургер-пицца</h1>
        <span>тонкое тесто, 26 см.</span>
      </div>
      <div className="shopCard__amount">
        <img src="/img/cardMinus.svg" alt="cardMinus"/>
        <span>2</span>
        <img src="/img/cardPlus.svg" alt="cardPlus"/>
      </div>
      <span className="shopCard__price">770 ₽ </span>
      <img className="shopCard__remove" src="/img/cartRemove.png" alt="cardRemove"/>
    </div>
  );
}