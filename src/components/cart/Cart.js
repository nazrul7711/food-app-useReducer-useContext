import React from 'react'
import style from "./Cart.module.css"
import { useContext } from 'react'
import cartContext from './store/cart-context'
import CartItem from './CartItem'

function Cart(props) {
  const btnHandler = ()=>{
    props.onClose()
  }
  //adding item here means increment the amount only by one 
  const itemAddFunction =(item)=>{
    let newItem={...item,amount:1}
    cartCtx.addItemHandler(newItem);
  }
  
  const itemRemoveFunction = (id)=>{
    cartCtx.removeItemHandler(id)
  }

  let cartCtx = useContext(cartContext)
  let totalAmount = `$${cartCtx.items.reduce((acc,curr)=>acc+(curr.amount*curr.price),0)}`

  let cartItems = (
    <ul className={style.unorderedList}>
      {cartCtx.items.map((item) => (
      <CartItem
        key={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={itemAddFunction.bind(null,item)}
        onRemove={itemRemoveFunction.bind(null,item.id)}
       />
      ))}
    </ul>
  );

  return (
    <div>
      <div className={style.backdrop} onClick={btnHandler}></div>
      <div className={style.overlay}>
        {cartItems}
        <div className={style.middle}>
          <h1>Total Amount</h1>
          <h2>{totalAmount}</h2>
        </div>
        <div className={style.btn}>
          <button onClick={btnHandler}>Close</button>
          <button onClick={btnHandler}>Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart