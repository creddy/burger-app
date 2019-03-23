import React from "react";
import styles from "./Input.module.css";

interface Option {
  value: string;
  displayValue: string;
}

export interface SelectElementConfig {
  options: Option[];
}

interface Props {
  label: string;
  elementConfig: SelectElementConfig;
  value: string;
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
}

const input = (props: Props) => {
  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      <select
        className={styles.InputElement}
        value={props.value}
        onChange={props.onChange}
      >
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
