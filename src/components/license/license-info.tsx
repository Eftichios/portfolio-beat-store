import styles from "./license-info.module.css";
import licenseInfo from "./license.json";
import { licenseItem } from "./license-types";
import LicenseItem from "./license-item";

export default function LicenseInfo() {
  function mapLicenses() {
    return licenseInfo.map((license: licenseItem, index: number) => (
      <LicenseItem key={index} license={license} />
    ));
  }

  return (
    <div className={styles.licenseInfoContainer}>
      <div className={styles.licenseInfoTitle}>
        <h2>Licensing Info</h2>
        <div className={styles.licenseItemContainer}>{mapLicenses()}</div>
      </div>
    </div>
  );
}
