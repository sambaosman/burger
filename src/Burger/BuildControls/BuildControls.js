import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>{" "}
        {/*toFixed saves to two decimal places*/}
      </p>
      {controls.map((element) => (
        <BuildControl
          key={element.label}
          label={element.label}
          added={() => props.ingredientAdded(element.type)} //we need type to use ingredientAddeHandler so we pass it through here so we don't need to pass it all the way down
          removed={() => {
            props.ingredientRemoved(element.type);
          }}
          //{salad: true, meat: false, etc.}
          disabled={props.disabled[element.type]}
        ></BuildControl>
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        Order Now
      </button>
    </div>
  );
};

export default buildControls;
