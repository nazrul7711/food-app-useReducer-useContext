import React from "react";
import style from "./CartItem.module.css";


function CartItem(props) {
  const incrementHandler=()=>{
    let data = {
      name:props.name,
      id:props.id,
      price:props.price,
      amount:props.amount
    }
    props.onAdd(data)
  }

  return(
    <li className={style.item}>
      <div className={style.first}>
        <h1>{props.name}</h1>
        <div>
          <h3>${props.price}</h3>
          <div className={style.amount}>x {props.amount}</div>
        </div>
      </div>
      <div className={style.second}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );

}

export default CartItem;
