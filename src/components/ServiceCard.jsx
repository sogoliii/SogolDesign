import styles from "./ServiceCard.module.css";

function ServiceCard({ services, bgColor, rotateDeg, circle }) {
  return (
    <ul
      className={styles.serviceList}
      style={{ backgroundColor: bgColor, transform: `rotate(${rotateDeg})` }}
    >
      <li className={`circle ${circle}`}></li>
      {services.map((service) => (
        <li key={service.name} className={styles.serviceItems}>
          <span className={styles.serviceItemIcon}>
            <img src={service.src} alt={service.name} />
          </span>
          <span>{service.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default ServiceCard;
