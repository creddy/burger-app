import React from "react";
import styles from "./NavigationItem.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  link: string;
  active?: boolean;
}

const navigationItem = (props: Props) => (
  <li className={styles.NavigationItem}>
    <a className={props.active ? styles.active : undefined} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
