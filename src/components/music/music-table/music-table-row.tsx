import ShoppingCartBtn from "@/ui/shopping-cart/shopping-cart-btn";
import Image from "next/image";
import styles from "./music-table-row.module.css";

export default function MusicTableRow(props: musicTableProps) {
  const { imagePath, title, time, bpm }: musicTableProps = props;

  return (
    <tr className={styles.musicTableRowTr}>
      <td>
        <Image src={imagePath} alt="Song image" width={50} height={50} />
      </td>
      <td>{title}</td>
      <td className={styles.hideColumnMobile}>{time}</td>
      <td className={styles.hideColumnMobile}>{bpm}</td>
      <td>
        <ShoppingCartBtn />
      </td>
    </tr>
  );
}

interface musicTableProps {
  imagePath: string;
  title: string;
  time: string;
  bpm: number;
}
