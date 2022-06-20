import React from 'react';
import './Navigation.scss'

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="categories">
        <ul className="categories__list">
          <li className="categories__item categories__item_active">Все</li>
          <li className="categories__item">Мясные</li>
          <li className="categories__item">Вегетарианская</li>
          <li className="categories__item">Гриль</li>
          <li className="categories__item">Острые</li>
          <li className="categories__item">Закрытые</li>
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