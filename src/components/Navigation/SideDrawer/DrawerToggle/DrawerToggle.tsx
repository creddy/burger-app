import React from "react";
import styles from "./DrawerToggle.module.css";

interface Props {
  clicked(): void;
}

const drawerToggle = (props: Props) => (
  <div className={styles.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
