import React from "react";
import Card from "../Card/Card";
import "./Main.scss"
import Loader from "../Data/Loader";
import Navigation from "../Navigation/Navigation";

export default function Home({items, isLoading}) {

  return (
    <>
      <Navigation/>
      <main className="main">
        <h2>Все пиццы</h2>
        <div className="main__container">
          {
            isLoading ? Array(12)
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