import React, {useState, useEffect} from "react";
import Card from "../Card/Card";
import "./Main.scss"
import Loader from "../Data/Loader";
import Navigation from "../Navigation/Navigation";

export default function Home() {
  const [items, setItems] = useState([]);
  const [categoriesId, setCategoriesId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState(
    {name: "Популярности", sortProperty: "rating", id: 0}
  );

  const onClickCategories = (index) => {
    (categoriesId === index) ? setCategoriesId(0) : setCategoriesId(index);
  }

  const categoriesStyle = (index) => {
    return categoriesId === index ? "categories__item categories__item_active" : "categories__item";
  }

  const onClickSort = (obj, state) => {
    (sortType === obj) ? setSortType({
        name: "Популярности",
        sortProperty: "rating",
        id: 0
      })
      : setSortType(obj);
    state(false);
  }

  const onClickFilter = (index, state) => {
    (categoriesId === index) ? setCategoriesId(0) : setCategoriesId(index);
    state(false);
  }

  const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.sortProperty.replace('-', '');
  const category =  categoriesId > 0 ? `category=${categoriesId}` : '';

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://62b626ae42c6473c4b403a58.mockapi.io/pizzas?${category}&sortBy=${sortBy}&order=${order}`
    )
      .then(res => res.json())
      .then(arr => setItems(arr))
      .then(() => setIsLoading(false));
  }, [categoriesId, sortType]);

  return (
    <>
      <
        Navigation
        categoriesId={categoriesId}
        setCategoriesId={setCategoriesId}
        sortType={sortType}
        setSortType={setSortType}
        onClickCategories={(i) => onClickCategories(i)}
        categoriesStyle={(i) => categoriesStyle(i)}
        onClickSort={(o, s) => onClickSort(o, s)}
        onClickFilter={(i, s) => onClickFilter(i, s)}
      />
      <main className="main">
        <h2>Все пиццы</h2>
        <div className="main__container">
          {
            isLoading ? Array(items.length)
                .fill({})
                .map((_, index) => <Loader key={index}/>)
              :
              items.map(obj => (
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
      </main>
    </>
  );
}