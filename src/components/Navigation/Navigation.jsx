import React, {useEffect, useRef, useState} from 'react';
import './Navigation.scss'
import {useSelector, useDispatch} from "react-redux";
import {setCategoriesId, setSortType} from "../Redux/Slices/filterSlice";

export const sortList = [
  {name: "Популярности (DESC)", sortProperty: "rating", id: 0},
  {name: "Популярности (ASC)", sortProperty: "-rating", id: 1},
  {name: "Цене (DESC)", sortProperty: "price", id: 2},
  {name: "Цене (ASC)", sortProperty: "-price", id: 3},
  {name: "Алфавиту (DESC)", sortProperty: "name", id: 4},
  {name: "Алфавиту (ASC)", sortProperty: "-name", id: 5}
];

export default function Navigation() {
  const dispatch = useDispatch();
  const {categoriesId, sortProperty} = useSelector(state => state.filter);
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);
  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
  const sortRef = useRef();
  const filterRef = useRef();

  const arrowStyle = (state) => {
    return state ? "sort__open-arrow" : 'sort__close-arrow'
  }

  const sortStyle = (property) => {
    return (property === sortProperty) ? "sort__item sort__item_active" : "sort__item";
  }

  const categoriesStyle = (index) => {
    return categoriesId === index ? "categories__item categories__item_active" : "categories__item";
  };

  const onChangeCategories = (id) => {
    dispatch(setCategoriesId(id));
  };

  const onChangeSort = (obj) => {
    dispatch(setSortType(obj))
  };

  const onClickCategories = (index) => {
    (categoriesId === index) ? onChangeCategories(0) : onChangeCategories(index);
  };

  const onClickSort = (obj, state) => {
    if (sortProperty !== obj.sortProperty)
      onChangeSort(obj.sortProperty);
    // (sortProperty !== obj.sortProperty) ? onChangeSort(obj.sortProperty)
    state(false);
  };

  const onClickFilter = (index, state) => {
    (categoriesId === index) ? onChangeCategories(0) : onChangeCategories(index);
    state(false);
  };

  const findSortItem = () => {
    const item = sortList.filter(item => item.sortProperty === sortProperty);
    return item[0].name;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(sortRef.current)) {
        setIsVisiblePopup(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);

  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.path.includes(filterRef.current)) {
        setIsVisibleFilter(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);

  }, []);

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
      <div className="sort" ref={sortRef}>
        <div className="sort__label">
          <div className="sort__img">
            <img
              className={arrowStyle(isVisiblePopup)}
              src="/img/bottomArrow.svg"
              alt="bottomArrow"
            />
          </div>
          <span>Сортировка по:</span>
          <div className="sort__block">
            <span
              className='sort__choice'
              onClick={() => setIsVisiblePopup(!isVisiblePopup)}
            >
              {findSortItem()}
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
      <div className="sort sort_filter" ref={filterRef}>
        <div className="sort__label">
          <div className="sort__img">
            <img
              className={arrowStyle(isVisibleFilter)}
              src="/img/bottomArrow.svg"
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
