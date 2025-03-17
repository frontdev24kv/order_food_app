import React, { useState } from "react";
import CartContextProvider from "./components/store/CartContextProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  };
  const hideCartHandler = () => {
    setCartIsVisible(false);
  };

  return (
    <CartContextProvider>
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
    </CartContextProvider>
  );
};

export default App;
