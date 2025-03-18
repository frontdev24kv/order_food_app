import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const { items, totalAmount } = cartContext;
  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };
  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={styles["cart-items"]}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onAdd={addCartItemHandler.bind(null, item)}
            onRemove={removeCartItemHandler.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        {totalAmount > 0 ? (
          <>
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </>
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <div className={styles.actions}>
        <button onClick={props.onHideCart}>Close cart</button>
        {!!totalAmount && <button onClick={() => alert('You can not make an order. It is a simple test project')}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
