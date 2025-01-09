import React from "react";
import ratingStar from "../../assets/rating-star.png";
import clock from "../../assets/clock.png";
import "./card.css";
const Cards = () => {
  return (
    <div className="main-card">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjHDp6F68GbTyFtCQlASsvymW8OUV5v_eFjA&s"
        }
        alt="recipeCard1"
        width="200px"
        className="recipe-image"
      />
      <p className="recipe-name">Pasta</p>
      <div className="recipe-info">
        <div className="make-time">
          <img src={clock} alt="clock" height="15px" width="15px" />
          <p>30 min</p>
        </div>
        <div className="recipe-ratings">
          <p>4.5</p>
          <img src={ratingStar} alt="rating" height="15px" width="15px" />
        </div>
      </div>
    </div>
  );
};
export default Cards;
