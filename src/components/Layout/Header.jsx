import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import sushiImg from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Sushi Bar</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImg} alt="sushi-bar" />
      </div>
    </React.Fragment>
  );
};

export default Header;
