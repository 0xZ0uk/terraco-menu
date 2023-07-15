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
        <div className={styles.itemWrapper}>
          <p className={styles.itemName}>{name}</p>
          <p className={styles.itemPrice}>{price}</p>
        </div>
        {!!ingredients && (
          <p className={styles.itemIngredients}>{ingredients}</p>
        )}
        {!!castas && <p className={styles.itemIngredients}>{castas}</p>}
      </div>
      <div>
        <div>
          {!!gluten && <span className={styles.itemIcon + " icon-sgluten"} />}
          {!!vegan && <span className={styles.itemIcon + " icon-vegan"} />}
          {!!vegetarian && (
            <span className={styles.itemIcon + " icon-vegetariano"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
