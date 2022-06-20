import React from "react";
import Card from "../Card/Card";
import "./Main.scss"

export default function Main() {
  return (
    <main>
      <h2>Все пиццы</h2>
      <div className="main__container">
        <Card/>
      </div>
    </main>
  );
}