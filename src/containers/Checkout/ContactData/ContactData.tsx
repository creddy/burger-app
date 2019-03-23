import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";
import { Ingredients } from "../../../components/Burger/Burger";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { RouteComponentProps } from "react-router-dom";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Input/Select";

interface Props extends RouteComponentProps {
  ingredients: Ingredients;
  price: number;
}

interface OrderFormElementConfig {
  id: string;
  elementLabel: string;
  elementType: Function;
  elementConfig: object;
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
        elementConfig: { type: "text", placeholder: "Your Name" },
        value: ""
      },
      {
        id: "street",
        elementLabel: "street",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "Street" },
        value: ""
      },
      {
        id: "zipCode",
        elementLabel: "zipCode",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "ZIP Code" },
        value: ""
      },
      {
        id: "country",
        elementLabel: "country",
        elementType: Input,
        elementConfig: { type: "text", placeholder: "Country" },
        value: ""
      },
      {
        id: "email",
        elementLabel: "email",
        elementType: Input,
        elementConfig: { type: "email", placeholder: "Your E-Mail" },
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
    event: React.ChangeEvent<HTMLInputElement>,
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
    const formElementArray: OrderFormElement[] = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: this.state.orderForm[key].id,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form>
        {formElementArray.map(formElement => {
          const TagName = formElement.config.elementType;
          return (
            <TagName
              key={formElement.id}
              label={formElement.config.elementLabel}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                this.inputChangedHandler(event, formElement.id)
              }
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
