import React from "react";
import styles from "./Input.module.css";

interface Option {
  value: string;
  displayValue: string;
}

interface ElementConfig {
  options: Option[];
}

interface Props {
  inputType: string;
  label: string;
  elementConfig: ElementConfig;
  value: string;
}

const input = (props: Props) => {
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      <select className={styles.InputElement} value={props.value}>
        {props.elementConfig.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.displayValue}
          </option>
        ))}
      </select>
    </div>
  );
};

export default input;
