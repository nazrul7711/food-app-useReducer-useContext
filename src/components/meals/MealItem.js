import React from 'react'
import style from "./MealItem.module.css"
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import cartContext from '../cart/store/cart-context';

function MealItem(props) {

  let cartCtx = useContext(cartContext)

  const dispatchDetailHandler=(amount)=>{
    let dispatchData = {
      id:props.id,
      amount:amount,
      price:props.price,
      name:props.name
    }
    cartCtx.addItemHandler(dispatchData)

  }
  return (
    <li className={style.mealItem}>
      <div className={style.element}>
        <div>
          <h3 >{props.name}</h3>
          <div className={style.desc}>{props.description}</div>
          <div  className={style.price}>${props.price}</div>
        </div>
        <MealItemForm dispatchDetail={dispatchDetailHandler}/>
      </div>
      <div className={style.line}></div>
    </li>
  );
}

export default MealItem