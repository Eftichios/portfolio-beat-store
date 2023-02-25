import { licenseItem } from "./license-types";
import styles from "./license-item.module.css";

export default function LicenseItem(props: { license: licenseItem }) {
  return (
    <div className={styles.licenseItem}>
      <div className={styles.licenseItemCard}>
        <h5>{props.license.title}</h5>
        <p>
          <span className={styles.licensePrice}>${props.license.price}</span>
          <br />
          Per Unit
        </p>
        <p>
          <span className={styles.licenseDescription}>
            {props.license.description}
          </span>
        </p>
        <div className={styles.licenseItemBtnContainer}>
          <button>Read Full License</button>
        </div>
      </div>
    </div>
  );
}
