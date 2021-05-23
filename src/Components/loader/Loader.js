import React from "react";
import styles from "./loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loader_body}>
      <div className={styles.loader}></div>
    </div>
  )
};
export default Loader;
