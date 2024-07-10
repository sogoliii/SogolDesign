import styles from "./Form.module.css";
function Form() {
  return (
    <form
      className={styles.form}
      action="https://formsubmit.co/contact.sogolmofrad.design"
      method="POST"
    >
      <div className={`${styles.formInputGroup} ${styles.formInputGroup1}`}>
        <label>
          <span className={styles.FormLabelNumber}>01</span>
          <span>What is your name?</span>
        </label>
        <input type="text" name="full name" placeholder="Type your full name" />
      </div>
      <div className={`${styles.formInputGroup} ${styles.formInputGroup2}`}>
        <label>
          <span className={styles.FormLabelNumber}>02</span>
          <span>What is your email address?</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Type your email address"
        />
      </div>
      <div className={`${styles.formInputGroup} ${styles.formInputGroup3}`}>
        <label>
          <span className={styles.FormLabelNumber}>03</span>
          <span>What is your phone number?</span>
        </label>
        <input type="phone" name="phone" placeholder="Type your phone number" />
      </div>
      <div className={`${styles.formInputGroup} ${styles.formInputGroup4}`}>
        <label>
          <span className={styles.FormLabelNumber}>04</span>
          <span>Tell us about your project!</span>
        </label>
        <input
          type="text"
          name="project"
          placeholder="Type your project description"
        />
        <input
          type="hidden"
          name="_next"
          value="https://sogolmofrad.design/thankyou"
        ></input>
      </div>
      <button type="submit">Contact Me!</button>
    </form>
  );
}

export default Form;
