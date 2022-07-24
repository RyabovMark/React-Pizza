import React from "react";
import "./ShopCart.scss";
import ShopCard from "../ShopCard/ShopCard";
import {Link} from "react-router-dom";
import {clearItems} from "../Redux/Slices/cartSlice";
import {useDispatch, useSelector} from "react-redux";

export default function ShopCart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const count = useSelector(state =>
    state.cart.items.reduce((sum, current) => {
      return sum + current.count
    }, 0));
  const {totalPrice} = useSelector(state => state.cart);

  return (
    <div className="shop-cart">
      {
        items.length > 0 ?
          <div className="shop-cart__container">
            <div className="shop-cart__header">
              <div className="shop-cart__title">
                <img src="/img/greyCart.svg" alt="shopCart"/>
                <span>Корзина</span>
              </div>
              <div className="shop-cart__remove"
                   onClick={() => dispatch(clearItems())}>
                <img src="/img/trashBag.svg" alt="trashBag"/>
                <span>Очистить корзину</span>
              </div>
            </div>
            <>
              {items.map((obj, i) =>
                <ShopCard key={obj.id + i} {...obj}/>
              )
              }
            </>
            <div className="shop-cart__footer">
              <div className="shop-cart__amount">
                <div className="amount">
                  <span>Всего пицц:</span>
                  <b className="summary">{count} шт.</b>
                </div>
                <div className="shop-cart__price">
                  <span>Сумма заказа:</span>
                  <b className="price">{totalPrice} ₽</b>
                </div>
              </div>
              <Link to='/'>
                <div className="btn btn_white">
                  <img src="/img/back.svg" alt=""/>
                  <span>Вернуться назад</span>
                </div>
              </Link>
              <div className="btn btn_buy">
                Оплатить сейчас
              </div>
            </div>

          </div>
          :
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
      }
    </div>
  );
}