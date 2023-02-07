import React from 'react'
import style from "./AvailableMeals.module.css"
import Card from '../ui/Card';
import MealItem from './MealItem';

function AvailableMeals() {
  const dummy_meals = [
    {
      id: "m1",
      name: "Gobi",
      description: "finest kobi from our market",
      price: 56.22,
    },
    {
      id: "m2",
      name: "Palak",
      description: "finest palak from our india",
      price: 156.22,
    },
    {
      id: "m3",
      name: "Paneer",
      description: "finest paneer  from our amul",
      price: 56.22,
    },
  ];
  return (
    <Card>
      <ul className={style.available}>
        {dummy_meals.map((x) => (
          <MealItem key={x.id} id={x.id} name={x.name} description={x.description} price={x.price}/>
        ))}
      </ul>
    </Card>
  );
}

export default AvailableMeals