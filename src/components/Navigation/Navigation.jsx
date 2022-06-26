import React, {useState} from 'react';
import './Navigation.scss'

export default function Navigation() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [sortClass, setSortClass] = useState(0);

  const categories = [
    {title: "Все", id: 1},
    {title: "Мясные", id: 2},
    {title: "Вегетарианская", id: 3},
    {title: "Гриль", id: 4},
    {title: "Острые", id: 5},
    {title: "Закрытые", id: 6},
  ];

  const sortList = ["Популярности", "Цене", "Алфавиту"];

  const onClickCategories = (index) => {
    (activeIndex === index) ? setActiveIndex(0) : setActiveIndex(index);
  }

  const categoriesStyle = (index) => {
    return activeIndex === index ? "categories__item categories__item_active" : "categories__item";
  }

  const arrowState = (isVisiblePopup) => {
    return isVisiblePopup ? "sort__open-arrow" : 'sort__close-arrow'
  }

  const onClickSort = (index) => {
    (sortClass === index) ? setSortClass(0) : setSortClass(index);
    setIsVisiblePopup(false);
  }

  const sortStyle = (index) => {
    return (sortClass === index) ? "sort__item sort__item_active" : "sort__item";
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
            <img
              className={arrowState(isVisiblePopup)}
              src="img/bottomArrow.svg"
              alt="bottomArrow"
            />
          </div>
          <span>Сортировка по:</span>
          <div className="sort__block">
            <span
              className='sort__choice'
              onClick={() => setIsVisiblePopup(!isVisiblePopup)}
            >
              {sortList[sortClass]}
            </span>
          </div>
        </div>
        {
          isVisiblePopup &&
          <div className="sort__popup">
            <ul className="sort__list">
              {
                sortList.map((item, index) => (
                  <li
                    key={index}
                    className={sortStyle(index)}
                    onClick={() => onClickSort(index)}
                  >
                    <span>{item}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
    </nav>
  );
}