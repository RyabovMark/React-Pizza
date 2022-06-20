import React from "react";
import "./Card.scss"

export default function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <img src="/img/pizzaPhotos/1.png" alt="1"/>
      </div>
      <h3>Чизбургер-пицца</h3>
      <div className="card__options">
        <div className="cart__changes">
          <span>тонкое</span>
          <span>традиционное</span>
          <span>26 см.</span>
          <span>30 см.</span>
          <span>40 см.</span>
        </div>
        <div className="card__total">
          <b>От 395 ₽</b>
          <div className="btn btn_add">
            <img src="/img/plus.svg" alt="plus"/>
            <span>Добавить</span>
            <div className="card__pizzaNum">10</div>
          </div>
        </div>
      </div>
    </div>
  )
    ;
}
