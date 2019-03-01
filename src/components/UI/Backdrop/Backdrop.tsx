import React from "react";
import styles from "./Backdrop.module.css";

interface Props {
  show: boolean;
  clicked(): void;
}

const backdrop = (props: Props) =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked} />
  ) : null;

export default backdrop;
