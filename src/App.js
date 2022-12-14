import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // this is a "prop function" that is passed into RecipeList :: allows to setRecipe and DELETE new recipe from array
  // it takes an indexToDelete and filters out the indexNOTchosen => re-setRecipes
  const deleteRecipe = (indexToDelete) =>
    setRecipes((currentRecipes) =>
      currentRecipes.filter((piece, index) => index !== indexToDelete)
    );

  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  // this is a "prop function" that is passed into RecipeCreate :: allows to setRecipe and add new recipe to array
  // added console.log(to see what logs)
  const createRecipe = (newRecipe) => {
    // setRecipes((currentRecipes) => [newRecipe, ...currentRecipes]);
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
    console.log("list of recipes", recipes);
    console.log("hi", newRecipe.name, newRecipe.photo);
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      {/* to pass in props for [recipe] and deleteRecipe propFunc and createRecipe propFunc so that the other functions are able to use it*/}
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
