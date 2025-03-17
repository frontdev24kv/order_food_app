import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = [].map((item) => <li key={item.id}>{item.name}</li>);
  return (
    <Modal>
      <ul className={styles["cart-items"]}>{cartItems}</ul>
      <div className={styles.total}>
        <span>Total</span>
        <span>99.99</span>
      </div>
      <div className={styles.actions}>
        <button>Close cart</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
