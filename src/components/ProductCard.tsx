import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import React, { createContext } from "react";
import { onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';
import {
  Product,
  ProductContextProps,
  // ProductCardProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);





const { Provider } = ProductContext;
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: InitialValues
}

export const ProductCard = ({
  product,
  className,
  style,
  value,
  initialValues,
  children,
  onChange,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({ count: counter, isMaxCountReached, increaseBy, maxCount: initialValues.maxCount, product, reset })}
      </div>
    </Provider>
  );
};
