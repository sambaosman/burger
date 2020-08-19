import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
console.log("hi");
const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map((element) => (
        <BuildControl key={props.label} label={props.label}></BuildControl>
      ))}
    </div>
  );
};

export default buildControls;
