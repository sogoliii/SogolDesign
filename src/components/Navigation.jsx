import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Navigation.module.css";
import { useState } from "react";
function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navigation}>
      <Logo />
      <nav className={styles.nav}>
        <div className={styles.menu} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? `${styles.open}` : ""}>
          <li>
            <NavLink to="/services">services</NavLink>
          </li>
          <li>
            <NavLink to="/works">works</NavLink>
          </li>
          <li>
            <NavLink to="/">about</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
