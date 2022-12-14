import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // initial Form State - so we can reset the form to these "" values
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // stores the States in "formData" - so we can store the submitted info in formData
  const [formData, setFormData] = useState({ ...initialFormState });

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // these handles when user hits "Submit"
  // createRecipe:: sends all the info from formData stored and setRecipe prop in app.js
  // setFormData:: resets the Form/formData to ""
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", formData);
    createRecipe({ ...formData });
    setFormData({ ...initialFormState });
  };

  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  // after user inputs in each form field.. this handleChange updates the formData Storage (before hitting Submit)
  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  return (
    /* add handleSubmit so that when a Submit button is clicked...there's an action! */
    /* add onChange so that when user edits fields.. it'll update formData */
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="reg_col">
              <label htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </label>
            </td>
            <td className="reg_col">
              <label htmlFor="cuisine">
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                  required
                />
              </label>
            </td>
            <td className="reg_col">
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                  required
                />
              </label>
            </td>
            <td className="content_td">
              <label htmlFor="ingredients">
                <textarea
                  rows="2"
                  cols="50"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  required
                ></textarea>
              </label>
            </td>
            <td className="content_td">
              <label htmlFor="preparation">
                <textarea
                  rows="2"
                  cols="50"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  required
                ></textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
