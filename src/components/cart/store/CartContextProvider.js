import React from "react";
import cartContext from "./cart-context";
import { useReducer } from "react";

const startState = {
  items: [],
  amount: 0,
};

//here we are creating a component that will work as a wrapper and all the components who would use the data of this context can be nested inside of it 
function reducerFunction(state, action) {
  //to add item we will see if it exist and if so we will increment thte total amount and increment the amount of the item
  if (action.type === "ADD") {
    let updatedAmount = state.amount + action.item.price * action.item.amount;
    let updatedList;
    let existingItemIndex = state.items.findIndex(
      (x) => x.id === action.item.id
    );

    let existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedList = [...state.items];
      updatedList[existingItemIndex] = updatedItem;
    } else {
      updatedList = state.items.concat(action.item);
    }
    return {
      items: updatedList,
      amount: updatedAmount,
    };

  }
  //to remove the item from the state first we will find if the item exist in our record then we will decrement the amount of the item by 1 we will use only once
  if (action.type === "REMOVE") {
    let itemExistIndex = state.items.findIndex((x) => x.id === action.id);
    let itemExist = state.items[itemExistIndex];
    let updatedList;
    let updatedTotalAmount;
    if (itemExist) {
      updatedTotalAmount = state.amount - itemExist.price;
      let updatedSingleAmt = itemExist.amount--;
      let updatedItem = { ...itemExist, amount: updatedSingleAmt };
      updatedList = [...state.items];
      updatedList[itemExistIndex] = updatedItem;
    } else {
      updatedList = [...state.items];
    }
    return {
      items: updatedList,
      amount: updatedTotalAmount,
    };
  }
  return startState;
}

function CartContextProvider(props) {
  //we use useReducer to use it for multiple useStates changes here inside we use items and totalAmount as states that we would want to change 
  let [cartState, dispatchFunction] = useReducer(reducerFunction, startState);

  //we will add item 
  function addItemFunction(item) {
    dispatchFunction({ type: "ADD", item: item });
  }
  //by getting the id of the item we will delete them
  function removeItemFunction(id) {
    dispatchFunction({ type: "REMOVE", id: id });
  }

  //this is the context we will use and it will be dynamic means any change to it will change cartContext and our components will use the updated veriosn of it
  const actualContext = {
    items: cartState.items,
    amount: cartState.amount,
    addItemHandler: addItemFunction,
    removeItemHandler: removeItemFunction,
  };

  return (
    <cartContext.Provider value={actualContext}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;


