import React from "react";
import styles from './productdisplay.module.css';

function Productdisplay({ productinfo }) {

  return (
    <div className={styles.productcontainer}>
      <img src={`products/${productinfo.id}.jpg`} alt="products" />
      <h2>{productinfo.name}</h2>
      <h3>Price: {productinfo.price}</h3>
    </div>
  )
}
export default Productdisplay;