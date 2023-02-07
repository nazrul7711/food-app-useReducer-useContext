import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";
import style from "./Meals.module.css"

function Meals() {
  return (
    <section className={style.meals}>
      <MealSummary />
      <AvailableMeals />
    </section>
  );
}

export default Meals;
