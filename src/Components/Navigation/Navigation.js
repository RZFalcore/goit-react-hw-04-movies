import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      className={styles.link}
      activeClassName={styles.linkActive}
      to="/"
      exact
    >
      Home
    </NavLink>
    <NavLink
      className={styles.link}
      activeClassName={styles.linkActive}
      to="/movies"
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
