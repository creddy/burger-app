import React from "react";
import styles from "./Button.module.css";

interface Props {
  clicked(): void;
  children: JSX.Element[] | JSX.Element | string;
  btnType: "Danger" | "Success";
}

const button = (props: Props) => (
  <button
    className={[styles.Button, styles[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
