import MusicTable from "@/components/music/music-table/music-table";
import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "./index.module.css";
import { Button } from "react-bootstrap";
import LicenseInfo from "@/components/license/license-info";
import PrimaryBtn from "@/ui/buttons/primary-btn";
import SecondaryBtn from "@/ui/buttons/secondary-btn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.heroImgContainer}>
        <div className={styles.heroImgText}>
          <h1 className={styles.heroImgTextTitle}>Beat Store</h1>
          <div className={styles.heroBtnContainer}>
            <PrimaryBtn clickHandler={() => console.log("TEST")}>
              Beats
            </PrimaryBtn>
            <SecondaryBtn clickHandler={() => console.log("TEST")}>
              About
            </SecondaryBtn>
          </div>
        </div>
        <Image
          className={styles.heroImg}
          src="/images/hero-img.jpg"
          fill
          alt="Hero Image"
        />
      </div>
      <MusicTable />
      <LicenseInfo />
    </>
  );
}
