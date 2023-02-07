import "./App.css";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { useState } from "react";
import CartContextProvider from "./components/cart/store/CartContextProvider";



function App() {
  const [isShow,setIsShow] = useState(false)

  function onShowHandler(){
    setIsShow(true)
  }
  function onCloseHandler(){
    setIsShow(false)
  }
  return (
    <CartContextProvider>
      {isShow && <Cart onClose={onCloseHandler} />}
      <Header onShow={onShowHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;

//components
