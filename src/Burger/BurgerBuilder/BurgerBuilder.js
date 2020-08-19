import React, { Component } from "react";
import Burger from "../Burger";
import BuildControls from "../BuildControls/BuildControls";

//name global constants with capital characters
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 1,
      meat: 2,
    },
    totalPrice: 4, //base price for burger
  };
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]; //accesses the inventory of each type (salad, etc.)
    const updatedCount = oldCount + 1; //adds one to the original inventory
    const updatedIngredients = { ...this.state.ingredients }; //creates a new copied array
    updatedIngredients[type] = updatedCount; //sets the inventory of a type to the new inventory
    const priceAddition = INGREDIENT_PRICES[type]; //accesses the prices of each type
    const oldPrice = this.state.totalPrice; //accesses the price of the burger itself
    const newPrice = oldPrice + priceAddition; //adds the base price with the toppings price
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients }); //updates total price to the new price and updates ingredients inventory
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;
    const basePrice = this.state.totalPrice;
    const priceSubtracted = INGREDIENT_PRICES[type];
    const newPrice = basePrice - priceSubtracted;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
  };
  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        ></BuildControls>
      </React.Fragment>
    );
  }
}
export default BurgerBuilder;
