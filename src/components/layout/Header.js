import React from 'react'
import style from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping } from "@fortawesome/free-solid-svg-icons";
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
      <header className={style.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShow={props.onShow}/>
      </header>
      <div className={style.image}>
        <img
          src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="food"
        />
      </div>
    </>
  );
}

export default Header