import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import { Ingredients } from "../../../components/Burger/Burger";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Input/Select";
import { SelectElementConfig } from "../../../components/UI/Input/Select";

interface Props extends RouteComponentProps {
  ingredients: Ingredients;
  price: number;
}

interface OrderFormElementConfig {
  id: string;
  elementLabel: string;
  elementType: Function;
  elementConfig: React.HTMLProps<HTMLInputElement> | SelectElementConfig;
  value: string;
}

interface OrderFormElement {
  id: string;
  config: OrderFormElementConfig;
}

interface State {
  orderForm: OrderFormElementConfig[];
  loading: boolean;
}

class ContactData extends Component<Props, State> {
  state = {
    orderForm: [
      {
        id: "name",
        elementLabel: "name",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "Your Name", options: [] },
        value: ""
      },
      {
        id: "street",
        elementLabel: "street",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "Street", options: [] },
        value: ""
      },
      {
        id: "zipCode",
        elementLabel: "zipCode",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "ZIP Code", options: [] },
        value: ""
      },
      {
        id: "country",
        elementLabel: "country",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "Country", options: [] },
        value: ""
      },
      {
        id: "email",
        elementLabel: "email",
        elementType: Input,
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
          options: []
        },
        value: ""
      },
      {
        id: "deliveryMethod",
        elementLabel: "deliveryMethod",
        elementType: Select,
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" }
          ]
        },
        value: ""
      }
    ],
    loading: false
  };

  orderHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };

  inputChangedHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    inputIdentifier: string
  ) => {
    const updatedOrderForm = Array.from(this.state.orderForm);
    const index = updatedOrderForm.findIndex(element => {
      return element.id === inputIdentifier;
    });
    const updatedFormElement = { ...updatedOrderForm[index] };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[index] = updatedFormElement;
    this.setState({ orderForm: updatedOrderForm });
  };

  render() {
    let form = (
      <form>
        {this.state.orderForm.map(element => {
          const TagName = element.elementType;
          return (
            <TagName
              key={element.id}
              label={element.elementLabel}
              elementConfig={element.elementConfig}
              value={element.value}
              onChange={(
                event:
                  | React.ChangeEvent<HTMLInputElement>
                  | React.ChangeEvent<HTMLSelectElement>
              ) => this.inputChangedHandler(event, element.id)}
            />
          );
        })}
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
