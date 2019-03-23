import React from "react";
import styles from "./Order.module.css";
import { Ingredients } from "../Burger/Burger";

interface Props {
  ingredients: Ingredients;
  price: number;
}

const order = (props: Props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientOutput = ingredients.map(ingredient => {
    return (
      <span
        key={ingredient.name}
        style={{
          textTransform: "capitalize",
          display: "inlineBlock",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
      >
        {ingredient.name} ({ingredient.amount})
      </span>
    );
  });

  return (
    <div className={styles.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>USD {props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;
