import React, {useState, useEffect, useContext} from "react";
import Card from "../Card/Card";
import "./Home.scss"
import Loader from "../Data/Loader";
import Navigation from "../Navigation/Navigation";
import Pagination from "../Pagination/Pagination";
import {AppContext} from "../../App";
import {useSelector} from "react-redux";
import axios from "axios";


export default function Home() {
  const {searchValue} = useContext(AppContext)
  const {categoriesId, sortType} = useSelector(state => state.filter);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category = categoriesId > 0 ? `category=${categoriesId}` : '';
  const numPage = searchValue === '' ? `page=${currentPage}&limit=3&` : '';
  const search = searchValue > 0 ? `&search=${searchValue}` : '';

  useEffect(() => {
    axios
      .get(`https://62b626ae42c6473c4b403a58.mockapi.io/pizzas?${category}&${numPage}&sortBy=${sortBy}&order=${order}${search}`)
      .then((response) => {
          setItems(response.data);
          setIsLoading(false);
        });

  }, [categoriesId, category, order, search, searchValue, sortBy, currentPage]);

  return (
    <>
      <Navigation/>
      <main className="main">
        <h2>Все пиццы</h2>
        <div className="main__container">
          {
            isLoading ?
              Array(8)
                .fill({})
                .map((_, index) => <Loader key={index}/>)
              : items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map(obj => (
                <
                  Card
                  id={obj.id}
                  key={obj.id}
                  name={obj.name}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  category={obj.category}
                  rating={obj.rating}
                  sizes={obj.sizes}
                  types={obj.types}
                />
              ))
          }
        </div>
        {!searchValue &&
          <Pagination onChangePage={number => setCurrentPage(number)}/>}
      </main>
    </>
  );
}