import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

interface Ingredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [key: string]: number;
}

interface Props {
  ingredients: Ingredients;
}

const burger = (props: Props) => {
  const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngredient key={igKey + i} type={igKey} />
    ));
  });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
