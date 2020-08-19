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
      {controls.map((element) => (
        <BuildControl
          key={props.igLabel}
          label={props.igLabel}
          added={() => props.ingredientAdded(element.type)} //we need type to use ingredientAddeHandler so we pass it through here so we don't need to pass it all the way down
          removed={() => {
            props.ingredientRemoved(element.type);
          }}
        ></BuildControl>
      ))}
    </div>
  );
};

export default buildControls;
