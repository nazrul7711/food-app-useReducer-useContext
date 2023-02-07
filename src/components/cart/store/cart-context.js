import React from "react"

//we create this context so that when we use cartContext it will give us auto-recommendations its the default value
const cartContext = React.createContext({
  items:[],
  amount:0,
  addItemHandler:(item)=>{},
  removeItemHandler:(id)=>{}
})

export default cartContext