import React from "react";
import Input from "./input";
import logo from '../logo/logo.png'
import styles from './header.module.css';

function Header({ handleOnChane }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Cara" />
      </div>
      <div className={styles.searchbox}>
        <Input handleOnChane={handleOnChane} />
      </div>
      <div className={styles.navitems}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;