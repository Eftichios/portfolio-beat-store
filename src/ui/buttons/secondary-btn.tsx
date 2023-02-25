import styles from "./secondary-btn.module.css";
import { PropsWithChildren } from "react";

export default function SecondaryBtn(props: PropsWithChildren<secondaryBtnProps>) {
  return <button onClick={(e)=> props.clickHandler(e)} className={styles.secondaryBtn}>{props.children}</button>;
}

interface secondaryBtnProps {
  clickHandler: Function;
}
