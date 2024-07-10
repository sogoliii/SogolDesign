import Navigation from "./Navigation";
import styles from "./Work.module.css";
function Work() {
  return (
    <>
      <Navigation />

      <section className="section">
        <h1 className="header-primary">My Works</h1>
        <div className={styles.worksContainer}>
          <div className={styles.work}>
            <a
              href="https://parmismirzababaei.co/"
              className={`${styles.workCard} ${styles.workCardRound}`}
            >
              <img src="images/parmis-logo-color.png" alt="parmis" />
            </a>
          </div>
          <div className={styles.work}>
            <a href="https://technomedikal.com" className={styles.workCard}>
              <img src="images/technomed-logo.png" alt="technomed" />
            </a>
          </div>
          <div className={`${styles.work} ${styles.work1}`}>
            <a
              href="http://abila.sogolmofrad.design"
              className={`${styles.workCard} ${styles.workCardRound}`}
            >
              <img src="images/abila-logo-1.png" alt="abila" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
