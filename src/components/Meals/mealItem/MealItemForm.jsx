import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isAmountValid, setIsAmountValid] = useState(true)

  const submitHandler = (event) => {
    event.preventDefault();
    const amountValue = amountInputRef.current.value
    if(amountValue.trim().length === 0 || +amountValue < 1 || +amountValue > 10){
      setIsAmountValid(false)
      return
    }
    props.onAddToCart(+amountValue)
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Quantity: "
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add to cart</button>
      {!isAmountValid && <p>Please enter correct value (from 1 to 10)</p>}
    </form>
  );
};

export default MealItemForm;
