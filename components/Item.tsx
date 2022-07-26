import React from "react";
import styles from "../styles/components.module.scss";

export interface IItem {
  id: string | number;
  name: string;
  price: string;
  ingredients?: string;
  castas?: string;
  gluten?: boolean;
  vegan?: boolean;
  vegetarian?: boolean;
}

const Item: React.FC<IItem> = ({
  name,
  price,
  ingredients,
  castas,
  gluten,
  vegan,
  vegetarian,
}) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemMain}>
        <p className={styles.itemName}>{name}</p>
        <p className={styles.itemPrice}>{price}</p>
      </div>
      <div>
        {!!ingredients && (
          <p className={styles.itemIngredients}>{ingredients}</p>
        )}
        {!!gluten && <span className={styles.itemIcon + " icon-sgluten"} />}
        {!!vegan && <span className={styles.itemIcon + " icon-vegan"} />}
        {!!vegetarian && (
          <span className={styles.itemIcon + " icon-vegetariano"} />
        )}
        {!!castas && <p className={styles.itemIngredients}>{castas}</p>}
      </div>
    </div>
  );
};

export default Item;
