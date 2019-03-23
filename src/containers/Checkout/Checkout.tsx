import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { RouteComponentProps } from "react-router-dom";
import { Ingredients } from "../../components/Burger/Burger";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

interface State {
  ingredients: Ingredients;
  totalPrice: number;
}

class Checkout extends Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients: Ingredients = { salad: 0, meat: 0, cheese: 0, bacon: 0 };
    let price = 0;

    for (let entry of Array.from(query.entries())) {
      if (entry[0] === "price") {
        price = +entry[1];
      } else {
        ingredients[entry[0]] = +entry[1];
      }
    }
    this.state = {
      ingredients: ingredients,
      totalPrice: price
    };
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props: RouteComponentProps) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
