import React from "react";
import styles from "./Modal.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const modal = (props: Props) => (
  <div className={styles.Modal}>{props.children}</div>
);

export default modal;
