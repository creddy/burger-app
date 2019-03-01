import React from "react";
import styles from "./Layout.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const layout = (props: Props) => (
  <React.Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={styles.Content}>{props.children}</main>
  </React.Fragment>
);

export default layout;
