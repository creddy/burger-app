import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

interface Props {}

const toolbar = (props: Props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
