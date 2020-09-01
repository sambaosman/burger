import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = [];
  for (let [item, number] of Object.entries(props.ingredients)) {
    // console.log(item);
    let Array = [];
    for (let i = 0; i < number; i++) {
      Array.push(
        <BurgerIngredient key={item + i} type={item}></BurgerIngredient>
      ); //for each number, it makes an array of the inventory of the item
    }
    // console.log(Array); //["",""]
    transformedIngredients.push(Array);
    // console.log(transformedIngredients); //[["",""],[""],["",""]]
  }

  // //you want to transform a string into an array with as many elements as we have ingredients for a given ingredient
  // //if we have two cheese ingredients, then he wants to transform the cheese string into an array that has 'x' elements. array that should have a length of two.
  // let transformedIngredients = Object.keys(
  //   //keys returns an array of the keys
  //   //turns state from BurgerBuilder object into an array
  //   props.ingredients //takes in prop.ingredients
  // )
  //   .map((igKey) => {
  //     //map goes through each element in the array
  //     console.log(igKey); //each individual type ex. salad, meat, bacon etc.
  //     //spread operator to make a new array
  //     return (
  //       [...Array(props.ingredients[igKey])] //Array(3) would make an array of 3 empty spaces so we want to access the number inside ingredients that's associated with a specific key
  //         // input: 'cheese'
  //         // output: ['', '']
  //         .map((_, i) => {
  //           //goes through both items in the small array helps focus only on the amount (index)
  //           //igKey is the type like "salad or meat"
  //           return <BurgerIngredient key={igKey + i} type={igKey} />;
  //         })
  //     );
  //     // [[<BurgerIngredient key={cheese + 0} type={cheese} />, <BurgerIngredient key={cheese + 1} type={cheese} />], ]
  //   })
  transformedIngredients.reduce((newArray, currValue) => {
    //currValue is each empty array
    //reduces the array to a single value
    //takes in a previous value, current value and an array
    return newArray.concat(currValue);
  }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />{" "}
      {/*these are constant so they stay the same */}
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
