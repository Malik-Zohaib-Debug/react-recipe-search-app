import React, { useEffect, useState } from "react";

const RecipeDetailPage = () => {
  const [recipeDetail, setRecipeDetail] = useState({});

  const getSingleRecipeDetail = () => {
    fetch("https://dummyjson.com/recipes/4")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipeDetail(data);
      });
  };

  useEffect(() => {
    getSingleRecipeDetail();
  }, []);

  return (
    <div className="recipe-detail">
      <div className="recipe-image">
        <img
          src={recipeDetail.image}
          alt={recipeDetail.name}
          height="500px"
          width="800px"
        />
      </div>
      <div className="detail">
        <div className="recipe-detail-info">
          <p className="heading">Name</p>
          <p className="recipe">{recipeDetail.name}</p>
        </div>
        <div className="recipe-detail-info">
          <p className="heading">Cuisine</p>
          <p className="recipe">{recipeDetail.cuisine}</p>
        </div>
        <div className="recipe-detail-info">
          <p className="heading">Calories</p>
          <p className="recipe">
            {recipeDetail.caloriesPerServing} Per Serving
          </p>
        </div>
        <div className="recipe-detail-info-ingredient">
          <p className="heading">Ingridients</p>
          <div className="ingredients">
            <ul>
              {recipeDetail?.ingredients?.map((ingridient) => (
                <li>{ingridient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
