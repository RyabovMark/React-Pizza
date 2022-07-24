import React, {useEffect} from "react";
import Card from "../Card/Card";
import Loader from "../Data/Loader";
import Navigation from "../Navigation/Navigation";
import Pagination from "../Pagination/Pagination";
import "./Home.scss"
import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas, selectedPizza} from "../Redux/Slices/pizzasSlice"
import {useSearchParams} from "react-router-dom";
import {selectedFilter} from "../Redux/Slices/filterSlice";

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const {
    categoriesId,
    sortProperty,
    currentPage,
    searchValue,
  } = useSelector(selectedFilter);

  const {items, status} = useSelector(selectedPizza);

  useEffect(() => {
    setSearchParams({
      categoriesId,
      sortProperty,
      currentPage,
      searchValue,
    })
  }, [categoriesId, currentPage, searchValue, setSearchParams, sortProperty]);

  // useEffect(() => {
  //   dispatch(setFilters(
  //     {
  //       categoriesId: +searchParams.get("categoriesId" || categoriesId),
  //       sortProperty: searchParams.get("sortProperty" || sortProperty),
  //       currentPage: +searchParams.get("currentPage" || currentPage),
  //       searchValue: searchParams.get("searchValue" || searchValue),
  //     }
  //   ));
  // }, []);

  useEffect(() => {
      const order = sortProperty?.includes('-') ? 'asc' : 'desc';
      const sortBy = sortProperty?.replace('-', '');
      const category = categoriesId > 0 ? `category=${categoriesId}` : '';
      const numPage = searchValue === '' ? `page=${currentPage}&limit=4` : '';
      const search = searchValue ? `&search=${searchValue}` : '';

      function getPizzas() {
        dispatch(fetchPizzas({
            order,
            sortBy,
            category,
            numPage,
            search
          })
        );
      }
      getPizzas();
    }, [categoriesId, currentPage, dispatch, searchValue, sortProperty]
  );

  const skeletonArray = Array(4)
    .fill({})
    .map((_, index) => <Loader key={index}/>);

  const itemsArr = items.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())).map(obj => (
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
  ));

  return (
    <>
      <Navigation/>
      <main className="main">
        <h2>Все пиццы</h2>
        <div className="main__container">
          {status === "request is loading" ? skeletonArray : itemsArr}
        </div>
        {!searchValue && <Pagination/>}
      </main>
    </>
  );
}


