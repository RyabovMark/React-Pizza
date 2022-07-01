import React, {useState} from 'react';
import './Navigation.scss'

export default function Navigation({
                                     categoriesId,
                                     sortType,
                                     onClickCategories,
                                     categoriesStyle,
                                     onClickSort,
                                     onClickFilter
                                   }) {

  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortList = [
    {name:"Популярности (DESC)", sortProperty: "rating", id: 0},
    {name:"Популярности (ASC)", sortProperty: "-rating", id: 1},
    {name:"Цене (DESC)", sortProperty: "price", id: 2},
    {name:"Цене (ASC)", sortProperty: "-price", id: 3},
    {name:"Алфавиту (DESC)", sortProperty: "name", id: 4},
    {name:"Алфавиту (ASC)", sortProperty: "-name", id: 5}
    ];

  const arrowStyle = (state) => {
    return state ? "sort__open-arrow" : 'sort__close-arrow'
  }

  const sortStyle = (property) => {
    return (property === sortType.sortProperty) ? "sort__item sort__item_active" : "sort__item";
  }

  return (
    <nav className="nav">
      <div className="categories">
        <ul className="categories__block">
          {
            categories.map(
              (item, index) =>
                <li
                  key={index}
                  onClick={() => onClickCategories(index)}
                  className={categoriesStyle(index)}
                >
                  {item}
                </li>
            )
          }
        </ul>
      </div>
      <div className="sort">
        <div className="sort__label">
          <div className="sort__img">
            <img
              className={arrowStyle(isVisiblePopup)}
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
              {sortType.name}
            </span>
          </div>
        </div>
        {
          isVisiblePopup &&
          <div className="sort__popup">
            <ul className="sort__list">
              {
                sortList.map((obj) => (
                  <li
                    key={obj.id}
                    className={sortStyle(obj.sortProperty)}
                    onClick={() => onClickSort(obj, setIsVisiblePopup)}
                  >
                    <span>{obj.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        }
      </div>
      <div className="sort sort_filter">
        <div className="sort__label">
          <div className="sort__img">
            <img
              className={arrowStyle(isVisibleFilter)}
              src="img/bottomArrow.svg"
              alt="bottomArrow"
            />
          </div>
          <span>Фильтрация по:</span>
          <div className="sort__block">
            <span
              className='sort__choice'
              onClick={() => setIsVisibleFilter(!isVisibleFilter)}
            >
              {categories[categoriesId]}
            </span>
          </div>
        </div>
        {
          isVisibleFilter &&
          <div className="sort__popup">
            <ul className="sort__list">
              {
                categories.map((item, index) => (
                  <li
                    key={index}
                    className={sortStyle(index, categoriesId)}
                    onClick={() => onClickFilter(index, setIsVisibleFilter)}
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