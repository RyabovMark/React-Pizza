import React, {useState} from 'react';
import './Navigation.scss'

export default function Navigation() {

  const [filterClass, setFilterClass] = useState(0);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const [sortClass, setSortClass] = useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  const sortList = ["Популярности", "Цене", "Алфавиту"];

  const onClickCategories = (index) => {
    (filterClass === index) ? setFilterClass(0) : setFilterClass(index);
  }

  const categoriesStyle = (index) => {
    return filterClass === index ? "categories__item categories__item_active" : "categories__item";
  }

  const arrowState = (setState) => {
    return setState ? "sort__open-arrow" : 'sort__close-arrow'
  }

  const onClickSort = (index) => {
    (sortClass === index) ? setSortClass(0) : setSortClass(index);
    setIsVisiblePopup(false);
  }

  const onClickFilter = (index) => {
    (filterClass === index) ? setFilterClass(0) : setFilterClass(index);
    setIsVisibleFilter(false);
  }

  const sortStyle = (index, state) => {
    return (state === index) ? "sort__item sort__item_active" : "sort__item";
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
                    className={sortStyle(index, sortClass)}
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
      <div className="sort sort_filter">
        <div className="sort__label">
          <div className="sort__img">
            <img
              className={arrowState(isVisibleFilter)}
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
              {categories[filterClass]}
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
                    className={sortStyle(index, filterClass)}
                    onClick={() => onClickFilter(index)}
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