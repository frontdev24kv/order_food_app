import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  const cartContext = useContext(CartContext);
  const cartNumberItems = cartContext.items.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  useEffect(() => {
    if (cartNumberItems === 0) return;
    const timer = setTimeout(() => {
      setIsButtonAnimated(true);
    }, 300);
    setIsButtonAnimated(false);
    return () => {
      clearTimeout(timer);
    };
  }, [cartNumberItems]);

  return (
    <button
      className={`${styles.button} ${isButtonAnimated ? styles.bump : ""}`}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{cartNumberItems}</span>
    </button>
  );
};

export default HeaderCartButton;
