import React from 'react';

const RecipeCard = ({recipe}) => {
  return (
    <div className="recipe-card">
      <div className="recipe-title">{recipe.title}</div>
      <div className="edit-delete-buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div className="ingredients-heading">Ingredients:</div>
      <div>{recipe.ingredients}</div>
      {/* Add more ingredients */}
      <div className="procedure-heading">Procedure:</div>
      <div>{recipe.procedure}</div>
      {/* Add more procedure steps */}
      <div className="user-info">
        <div className="user-fullname">{recipe.username}</div>
        <img
          className="user-pic"
          src={recipe.profilepicture}
          alt="User Profile Pic"
        />
      </div>
    </div>
  );
};

export default RecipeCard;
