import React from "react";
import Card from "../Card/Card";
import "./Main.scss"
import pizzas from "../Data/pizza.json"

export default function Main() {

  return (
    <main className="main">
      <h2>Все пиццы</h2>
      <div className="main__container">
        {
          pizzas.map(obj => (
            <Card{...obj}/>
          ))
        }
      </div>
    </main>
  );
}