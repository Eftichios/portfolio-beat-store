import styles from "./primary-btn.module.css";
import { PropsWithChildren } from "react";

export default function PrimaryBtn(props: PropsWithChildren<primaryBtnProps>) {
  return <button onClick={(e)=> props.clickHandler(e)} className={styles.primaryBtn}>{props.children}</button>;
}

interface primaryBtnProps {
  clickHandler: Function;
}
