import React, {useState} from 'react';
import './Navigation.scss'

export default function Navigation() {

  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    {title: "Все", id: 1},
    {title: "Мясные", id: 2},
    {title: "Вегетарианская", id: 3},
    {title: "Гриль", id: 4},
    {title: "Острые", id: 5},
    {title: "Закрытые", id: 6},
  ];

  const onClickCategories = (index) => {
    (activeIndex === index) ? setActiveIndex(0) :  setActiveIndex(index);
  }

  const categoriesStyle = (index) => {
    return activeIndex === index ? "categories__item categories__item_active" : "categories__item";
  }

  return (
    <nav className="nav">
      <div className="categories">
        <ul className="categories__list">
          {
            categories.map(
              (item, index) =>
                <li
                  key={item.id}
                  onClick={() => onClickCategories(index)}
                  className={categoriesStyle(index)}
                >
                  {item.title}
                </li>
            )
          }
        </ul>
      </div>
      <div className="sort">
        <div className="sort__label">
          <div className="sort__img">
            <img src="img/bottomArrow.svg" alt="bottomArrow"/>
          </div>
          <span>Сортировка по:</span>
          <span className='sort__choice'>популярности</span>
        </div>
        <div className="sort__popup">
          <ul className="sort__list">
            <li className="sort__item sort__item_active">популярности</li>
            <li className="sort__item">алфавиту</li>
            <li className="sort__item">цене</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}