import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  link: string;
  exact?: boolean;
}

const navigationItem = (props: Props) => (
  <li className={styles.NavigationItem}>
    <NavLink
      exact={props.exact}
      activeClassName={styles.active}
      to={props.link}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
