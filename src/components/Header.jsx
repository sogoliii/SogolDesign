import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Navigation from "./Navigation";
function Header() {
  const navigte = useNavigate();
  return (
    <>
      <Navigation />

      <header className={styles.header}>
        <div className={styles.headerText}>
          <h4>Hi, My name is Sogol</h4>
          <h2>I am a web designer, and also a UI/UX designer</h2>
          <p>
            I am a junior web designer and also a teacher. for my services you
            can contact me.
          </p>
          <button onClick={() => navigte("contact")}>hire me!</button>
        </div>
        <div className={styles.headerImg}>
          <img src="/images/sogol-pic.v3.gif" alt="sogol mofrad" />
        </div>
      </header>
    </>
  );
}

export default Header;
