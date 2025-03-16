import React from "react";
import Card from "../../UI/Card";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <Card className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>${props.price.toFixed(2)}</div>
      </div>
      <div></div>
    </Card>
  );
};

export default MealItem;
