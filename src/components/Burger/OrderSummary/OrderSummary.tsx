import React, { Component } from "react";
import Button from "../../UI/Button/Button";

interface Ingredients {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [key: string]: number;
}

interface Props {
  ingredients: Ingredients;
  purchaseContinued(): void;
  purchaseCancelled(): void;
  price: number;
}

class OrderSummary extends Component<Props> {
  componentDidUpdate() {
    console.log("[OrderSummary] componentDidUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)} </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </React.Fragment>
    );
  }
}

export default OrderSummary;
