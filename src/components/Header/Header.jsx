import React from "react";
import './Header.scss';
import {NavLink, useLocation} from "react-router-dom";
import Search from "../Search/Search";
import {useSelector} from "react-redux";
import {selectedCart} from "../Redux/Slices/cartSlice";

export default function Header() {
  const location = useLocation();
  const {totalPrice, items} = useSelector(selectedCart);

  const counter = items.reduce(((sum, current) => {
      return sum + current.count
    }
  ), 0);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <div className="header__logo">
            <div className="header__icon">
              <img src="/img/logo.svg" alt="logo"/>
            </div>
            <div className="header__title">
              <h1>REACT PIZZA</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </NavLink>
        {location.pathname !== "/shop-cart" &&
          <>
            <Search/>
            <NavLink to="/shop-cart">
              <div className="btn btn_header">
                <span className="header__price">{totalPrice} руб.</span>
                <div className="header__cartImg">
                  <img className="icon" src="/img/shopCart.svg"
                       alt="shopCart"/>
                </div>
                <span className="header__num">{counter}</span>
              </div>
            </NavLink>
          </>
        }
      </div>
    </header>
  );
}
