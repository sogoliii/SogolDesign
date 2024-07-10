import styles from "./Contact.module.css";
import Form from "./Form";
import Navigation from "./Navigation";
function Contact() {
  return (
    <>
      <Navigation />

      <section className={`section ${styles.sectionContact} `}>
        <h1 className="header-primary">Contact Me</h1>
        <div className={styles.contact}>
          <Form />
        </div>
      </section>
    </>
  );
}

export default Contact;
