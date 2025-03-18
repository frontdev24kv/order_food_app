import React, {useContext} from "react";
import { CartContext } from "../../../store/cart-context";
import Card from "../../UI/Card";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartContext = useContext(CartContext)

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      price: props.price,
      name: props.name,
      amount,
    })
  }

  return (
    <Card className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </Card>
  );
};

export default MealItem;
