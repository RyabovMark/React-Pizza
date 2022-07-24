import React from "react";
import "./ShopCard.scss";
import {useDispatch} from "react-redux";
import {
  minusItem,
  plusItem,
  removeItem
} from "../Redux/Slices/cartSlice";

export default function ShopCard({
                                   id,
                                   name,
                                   price,
                                   imageUrl,
                                   size,
                                   type,
                                   count
                                 }) {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(plusItem(id))
  };

  const onClickMinus = () => {
    dispatch(minusItem(id))
  };

  const onClickRemove = () => {
    dispatch(removeItem(id))
  };

  return (
    <>
      <div className="shop-card">
        <div className="shop-card__logo">
          <img className="shop-card__pizzaLogo" src={imageUrl}
               alt="pizzaPhoto"/>
        </div>
        <div className="shop-card__descriptions">
          <h1>{name}</h1>
          <span>{type}, {size} см.</span>
        </div>
        <div className="shop-card__amount">
          <img src="/img/cardMinus.svg" alt="cardMinus"
               onClick={() => onClickMinus()}/>
          <span>{count}</span>
          <img src="/img/cardPlus.svg" alt="cardPlus"
               onClick={() => onClickPlus()}/>
        </div>
        <span className="shop-card__price">{price * count} ₽ </span>
        <img className="shop-card__remove" src="/img/cartRemove.png"
             alt="cardRemove" onClick={()=>onClickRemove()}/>
      </div>
    </>
  );
}