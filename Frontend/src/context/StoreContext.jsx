import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  // const addToCart = (itemId) => {
  //   // when item is added to the cart first time
  //   if (!cartItem[itemId]) {
  //     setCartItem((prev)=>({ ...prev, [itemId]: 1 }));
  //   } else {
  //     setCartItem((prev)=>({ ...prev, [itemId]: prev[itemId] + 1 }));
  //   }
  // };
  const addToCart = (itemId) => {
    setCartItem((prev) => {
      const currentCount = prev[itemId] || 0; // Get current count or 0 if not present
      return { ...prev, [itemId]: currentCount + 1 }; // Increment count for that specific item
    });
  };

  const removeFromCart = (itemId) => {
    if (cartItem[itemId] > 0) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  // useEffect(() => {
  //   console.log(cartItem);
  // }, [cartItem]);

  const getTotalCartAmount = () => {
    let total = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        total += itemInfo.price * cartItem[item];
      }
    }
    return total;
  };

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
