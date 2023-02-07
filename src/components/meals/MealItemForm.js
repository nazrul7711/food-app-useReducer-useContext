import React from 'react'
import style from "./MealItemForm.module.css"
import { useRef } from 'react';

function MealItemForm(props) {
  const onSubmitHandler= ()=>{
    props.dispatchDetail(Number(inputRef.current.value))
  }
  const inputRef = useRef()
  return (
    <div className={style.form}>
      <div className={style.top}>
        <h3>Amount</h3>
        <input ref={inputRef} defaultValue="0" min="0" max="5" type="number" />
      </div>
      <button onClick={onSubmitHandler}>+ Add</button>
    </div>
  );
}

export default MealItemForm