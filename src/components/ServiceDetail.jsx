import styles from "./ServiceDetail.module.css";
function ServiceDetail({
  heading,
  paragraph,
  circle,
  link,
  background,
  rotateDeg,
}) {
  return (
    <div
      className={styles.serviceDetail}
      style={{ backgroundColor: background, transform: `rotate(${rotateDeg})` }}
    >
      <div className={`circle ${circle}`}></div>
      <h1>{heading}</h1>
      <p>{paragraph}</p>
      <a href="#works">{link}</a>
    </div>
  );
}

export default ServiceDetail;
