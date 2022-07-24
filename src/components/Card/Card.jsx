import React, {useState} from "react";
import "./Card.scss"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem} from "../Redux/Slices/cartSlice";

export default function Card({
                               id,
                               name,
                               price,
                               imageUrl,
                               sizes,
                               types
                             }) {
  const [pizzaType, setPizzaType] = useState(0);
  const [pizzaSize, setPizzaSize] = useState(0);
  const dispatch = useDispatch();

  const typesArr = ["Традиционное", "Тонкое"];

  const onClickType = (index) => {
    (pizzaType === index) ? setPizzaType(0) : setPizzaType(index);
  }

  const typeStyle = (index) => {
    return pizzaType === index ? "options__text options__text_active" : "options__text";
  }

  const onClickSize = (index) => {
    (pizzaSize === index) ? setPizzaSize(0) : setPizzaSize(index);
  };

  const sizeStyle = (index) => {
    return pizzaSize === index ? "options__text options__text_active" : "options__text";
  };

  //UUID

  const onClickAdd = () => {
    const type = typesArr[pizzaType];
    const size = sizes[pizzaSize];
    const item = {
      id: name + type + size,
      name,
      price,
      imageUrl,
      type,
      size,
    };
    dispatch(addItem(item));
  }

  return (
    <div id={id} className="card">
      <Link to={`/pizza/${id}`}>
        <div>
          <img className="card__img" src={imageUrl} alt="1"/>
        </div>
      </Link>
        <h3>{name}</h3>
      <div className="card__options">
        <div className="card__types">
          {types.map((type, index) => (
            <span
              onClick={() => onClickType(index)}
              className={typeStyle(index)}
              key={index}
            >
              {typesArr[type]}
            </span>
          ))}
        </div>
        <div className="card__sizes">
          {sizes.map((size, index) => (
            <span
              onClick={() => onClickSize(index)}
              className={sizeStyle(index)}
              key={index}
            >
              {size} см.
            </span>
          ))}
        </div>
      </div>
      <div className="card__total">
        <b>От {price} ₽</b>
        <div className="btn btn_add" onClick={() => onClickAdd()}>
          <img src="/img/plus.svg" alt="plus"/>
          <span>Добавить</span>
        </div>
      </div>
    </div>
  );
}
