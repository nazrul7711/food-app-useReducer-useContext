import React from 'react'
import style from "./Card.module.css"

function Card(props) {
  const classname = `${style.card} ${props.className} `
  return (
    <div className={classname}>{props.children}</div>
  )
}

export default Card