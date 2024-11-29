import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { FoodItem } from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item) => {
          // Check if the category is 'all' or matches the item's category
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id} // Ensure this is a unique identifier
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null; // Return null if the item does not match the category
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
