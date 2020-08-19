import React, { Component } from "react";
import classes from "./BurgerIngredient.css";
import PropTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null; //ingredient starts off as null
    switch (
      this.props.type //let burger expect a type property
    ) {
      case "bread-bottom": //if type is bread-bottom, ingredient is this div
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={classes.Meat}></div>;
        break;
      case "salad":
        ingredient = <div className={classes.Salad}></div>;
        break;
      case "cheese":
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case "bacon":
        ingredient = <div className={classes.Bacon}></div>;
        break;
      default:
        ingredient = null; //otherwise ingredient is null
    }
    return ingredient;
  }
}
BurgerIngredient.propTypes = {
  //has to be used in a class based component
  type: PropTypes.string.isRequired, //a menu of all the type of information that has to be used for props
};

export default BurgerIngredient;
