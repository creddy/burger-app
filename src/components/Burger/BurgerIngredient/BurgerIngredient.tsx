import React from "react";
import styles from "./BurgerIngredient.module.css";

interface Props {
  type: string;
}

const burgerIngredient = (props: Props) => {
  let ingredient = <div />;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom} />;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.Seeds1} />
          <div className={styles.Seeds2} />
        </div>
      );
      break;
    case "meat":
      ingredient = <div className={styles.Meat} />;
      break;
    case "cheese":
      ingredient = <div className={styles.Cheese} />;
      break;
    case "salad":
      ingredient = <div className={styles.Salad} />;
      break;
    case "bacon":
      ingredient = <div className={styles.Bacon} />;
      break;
  }
  return ingredient;
};

export default burgerIngredient;
