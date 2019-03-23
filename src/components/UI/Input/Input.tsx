import React from "react";
import styles from "./Input.module.css";

interface Props {
  label: string;
  elementConfig: React.HTMLProps<HTMLInputElement>;
  value: string;
}

const input = (props: Props) => {
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      <input
        className={styles.InputElement}
        {...props.elementConfig}
        value={props.value}
      />
    </div>
  );
};

export default input;
