import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import RecipeSearchBar from "./components/recipeSearchBar/RecipeSearchBar";
import Cards from "./components/card/Card";

function App() {
  return (
    <Fragment>
      <Header />
      <RecipeSearchBar />
      <Cards />
    </Fragment>
  );
}

export default App;
