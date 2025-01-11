import React from "react";
import ratingStar from "../../assets/rating-star.png";
import clock from "../../assets/clock.png";
import "./card.css";
const Cards = ({ recipe }) => {
  return (
    <div className="main-card">
      <img
        src={recipe.image}
        alt={recipe.name}
        width="350px"
        className="recipe-image"
      />
      <p className="recipe-name">{recipe.name}</p>
      <div className="recipe-info">
        <div className="make-time">
          <img src={clock} alt="clock" height="15px" width="15px" />
          <p>{recipe.cookTimeMinutes} min</p>
        </div>
        <div className="recipe-ratings">
          <p>{recipe.rating}</p>
          <img src={ratingStar} alt="rating" height="15px" width="15px" />
        </div>
      </div>
    </div>
  );
};
export default Cards;
