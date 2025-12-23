import React from "react";
import styles from "./Button.module.css";

function Button({ children, type = "button", ...rest }) {
  return (
    <button type={type} className={styles.button} {...rest}>
      {children}
    </button>
  );
}

export default Button;