import React from "react";
import sushiImg from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sushi Bar</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="sushi-bar" />
      </div>
    </React.Fragment>
  );
};

export default Header;
