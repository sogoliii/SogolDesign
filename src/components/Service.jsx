import Navigation from "./Navigation";
import styles from "./Service.module.css";
import ServiceCard from "./ServiceCard";
import ServiceDetail from "./ServiceDetail";
const heading_1 = "UI/UX Design";
const paragraph_1 =
  "As a UI/UX designer, I specialize in creating visually appealing and user-centered websites and applications. From wireframing to prototyping, I meticulously design intuitive interfaces that prioritize user needs and enhance overall usability.";
const link_1 = "See My Work...";
const bg_1 = "#ffcad4";
const heading_2 = "Coding";
const paragraph_2 =
  "I am a proficient front-end developer skilled in HTML, CSS, JavaScript, and React programming languages. My expertise lies in creating visually appealing and responsive websites and applications,based on practical designs.";
const link_2 = "Contact Me...";
const bg_4 = "#caffbf";
const services_1 = [
  {
    name: "photoshop",
    src: "images/icons8-photoshop-50.png",
    title: "Adobe Photoshop",
  },
  {
    name: "illustrator",
    src: "images/icons8-illustrator-50.png",
    title: "Adobe Illustrator",
  },
  {
    name: "indesign",
    src: "images/icons8-adobe-indesign-50.png",
    title: "Adobe InDesign",
  },
  {
    name: "figma",
    src: "images/icons8-figma-50.png",
    title: "Figma",
  },
];
const bg_3 = "#faf0ca";

const services_2 = [
  {
    name: "html",
    src: "images/icons8-html-50.png",
    title: "HTML",
  },
  {
    name: "css",
    src: "images/icons8-css-50.png",
    title: "CSS",
  },
  {
    name: "javascript",
    src: "images/icons8-javascript-50.png",
    title: "JavaScript",
  },
  {
    name: "react",
    src: "images/icons8-react-native-24.png",
    title: "React",
  },
];
const bg_2 = "#ffdd00";
function Service() {
  return (
    <>
      <Navigation />

      <section className="section">
        <h1 className="header-primary">My Services</h1>
        <div className={styles.serviceCardsContainer}>
          <ServiceCard
            services={services_1}
            bgColor={bg_3}
            rotateDeg="-12deg"
            circle="circle-1"
          />
          <ServiceDetail
            heading={heading_1}
            paragraph={paragraph_1}
            link={link_1}
            background={bg_1}
            circle="circle-2"
            rotateDeg="3deg"
          />
          <ServiceCard
            services={services_2}
            bgColor={bg_4}
            circle="circle-3"
            rotateDeg="6deg"
          />
          <ServiceDetail
            heading={heading_2}
            paragraph={paragraph_2}
            link={link_2}
            background={bg_2}
            circle="circle-4"
            rotateDeg="-12deg"
          />
        </div>
      </section>
    </>
  );
}

export default Service;
