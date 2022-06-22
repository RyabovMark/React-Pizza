import React, {useState} from "react";
import "./Card.scss"

export default function Card({
                               id,
                               name,
                               price,
                               imageUrl,
                               category,
                               rating,
                               sizes,
                               types
                             }) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [pizzaType, setPizzaType] = useState(0);
  const [pizzaSize, setPizzaSize] = useState(0);

  const typesArr = ["Традиционное", "Тонкое"];

  const onClickType = (index) => {
    (pizzaType === index) ? setPizzaType(0) :  setPizzaType(index);
  }

  const typeStyle = (index) => {
    return pizzaType === index ? "options__text options__text_active" : "options__text";
  }

  const onClickSize = (index) => {
    (pizzaSize === index) ? setPizzaSize(0) :  setPizzaSize(index);
  }

  const sizeStyle = (index) => {
    return pizzaSize === index ? "options__text options__text_active" : "options__text";
  }

  const onClickCount = () => {
    return setPizzaCount(pizzaCount + 1);
  }

  return (
    <div key={id} id={id} className="card">
      <div className="card__img">
        <img src={imageUrl} alt="1"/>
      </div>
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
        <div className="btn btn_add" onClick={onClickCount}>
          <img src="/img/plus.svg" alt="plus"/>
          <span>Добавить</span>
          <i className="card__count">{pizzaCount}</i>
        </div>
      </div>
    </div>
  );
}
