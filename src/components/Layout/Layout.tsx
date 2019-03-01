import React from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const layout = (props: Props) => (
  <React.Fragment>
    <Toolbar />
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
