import Link from "next/link";
import styles from "./footer.module.css";
import { FaFacebook, FaSoundcloud, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialIconSize: string = "2.5rem";

  return (
    <div className={styles.footerContainer}>
      <div className={styles.beatInfoContainer}>
        <h4>John Doe Beats</h4>
        <p>Important Info</p>
      </div>
      <div className={styles.footerNavigationContainer}>
        <Link href="/">
          <p className={styles.hoverUnderlineAnimation}>Home</p>
        </Link>
        <Link href="/beats">
          <p className={styles.hoverUnderlineAnimation}>Beats</p>
        </Link>
        <Link href="/about">
          <p className={styles.hoverUnderlineAnimation}>About</p>
        </Link>
      </div>
      <div>
        <p>&copy; Copyright TonCode 2023</p>
        <div className={styles.socialMediaLinks}>
          <Link href="#">
            <FaFacebook size={socialIconSize} />
          </Link>
          <Link href="#">
            <FaSoundcloud size={socialIconSize} />
          </Link>
          <Link href="#">
            <FaTwitter size={socialIconSize} />
          </Link>
          <Link href="#">
            <FaYoutube size={socialIconSize} />
          </Link>
        </div>
      </div>
    </div>
  );
}
