import React from "react";
import "./App.css";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.

  // const recipeTable = () => {
  //   recipes.map((recipe, index) => (
  //     <>
  //       <p className="post" style={{ paddingTop: 10 }}>
  //         {recipe.type === "Image" ? (
  //           <img
  //             src={recipe.content}
  //             alt="Girl in a jacket"
  //             width="500"
  //             height="600"
  //           />
  //         ) : (
  //           recipe.content
  //         )}

  //         <br />
  //         <button
  //           name="delete"
  //           key={index}
  //           onClick={() => deleteRecipe(index)}
  //           style={{ marginTop: 10 }}
  //         >
  //           Delete
  //         </button>
  //       </p>
  //     </>
  //   ));
  // };

  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr>
              <td className="reg_col">{recipe.name}</td>
              <td className="reg_col">{recipe.cuisine}</td>
              <td className="reg_col">
                <img src={recipe.photo} alt={recipe.name} />
              </td>
              <td className="content_td">
                <p>{recipe.ingredients}</p>
              </td>
              <td className="content_td">
                <p>{recipe.preparation}</p>
              </td>
              <td>
                <button
                  name="delete"
                  key={index}
                  onClick={() => deleteRecipe(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
