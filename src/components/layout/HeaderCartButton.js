import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import style from "./HeaderCartButton.module.css"
import { useContext } from 'react';
import cartContext from '../cart/store/cart-context';


function HeaderCartButton(props) {
  let cartCtx = useContext(cartContext)
  let totalItems = cartCtx.items.reduce((acc,curr)=>acc+curr.amount,0)
  

  return (
    <button className={style.btn} onClick={props.onShow}>
      <span>
        <FontAwesomeIcon icon={faCartShopping}/>
      </span>
      <span className={style.text}>Your Cart</span>
      <span className={style.price}>{totalItems}</span>
    </button>
  )
}

export default HeaderCartButton