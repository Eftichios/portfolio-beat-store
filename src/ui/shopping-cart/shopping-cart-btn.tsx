import { FaShoppingCart } from "react-icons/fa";
import styles from "./shopping-cart-btn.module.css";

export default function ShoppingCartBtn() {
  return (
    <div className={styles.shoppingCartBtnContainer}>
      <button>
        <FaShoppingCart />
        ADD
      </button>
    </div>
  );
}
