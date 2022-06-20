import React from "react";
import './Header.scss';


export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <div className="header__icon">
            <img src="/img/logo.svg" alt="logo"/>
          </div>
          <div className="header__title">
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="btn btn_header">
          <a href="/cart">
            <span className="header__price">520 руб.</span>
            <div className="header__cartImg">
              <img className="icon" src="/img/shopCart.svg"
                   alt="shopCart"/>
            </div>
            <span className="header__num">3</span>
          </a>
        </div>
      </div>
    </header>
  );
}
