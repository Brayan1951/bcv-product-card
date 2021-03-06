import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  // activeBtnClass?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {

  // maxcount

  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  // is maxreached usecallback [counter,maxcount]

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  )


  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${(isMaxReached()) ? styles.disable : ''}`} disabled={isMaxReached()} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};
