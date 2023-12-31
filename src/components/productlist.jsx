import React from "react";
import Productdisplay from "./productdisplay";
import styles from './productlist.module.css';

function Productlist({ products }) {
  return (
    <div className={styles.productlistbox}>
      {products.map(productdetails =>
        <Productdisplay key={productdetails.id} productinfo={productdetails} />)}
    </div>
  )
}
export default Productlist;