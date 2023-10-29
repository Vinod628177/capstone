import React, { useEffect, useState } from 'react';
import RecipeCard from './Card';
import './Dashboard.css';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const userId = "1"; // Replace with the actual user ID
  const apiKey = "qwerty"; // Replace with your API key

  const demoRecipes = [
    {
      'title': 'Chicken Biryani',
      'ingredients': 'Chicken, Biryani Rice, Biryani Masala, Curd, Onions',
      'procedure': "Take birayani cook itTake birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook itTake birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it",
      'username': 'Vinod Kumar',
      'profilepicture': 'img5'
    },
    {
      'title': 'Chicken Biryani',
      'ingredients': 'Chicken, Biryani Rice, Biryani Masala, Curd, Onions',
      'procedure': "Take birayani cook itTake birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook itTake birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it",
      'username': 'Vinod Kumar',
      'profilepicture': 'img5'
    },
    {
      'title': 'Chicken Biryani',
      'ingredients': 'Chicken, Biryani Rice, Biryani Masala, Curd, Onions',
      'procedure': "Take birayani cook itTake birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook itTake birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it Take birayani cook it",
      'username': 'Vinod Kumar',
      'profilepicture': 'img5'
    }
  ]

  useEffect(() => {
    // Define a function to fetch recipes from the API
    const fetchRecipes = async () => {
      try {
        // Make the API request
        const response = await fetch(
          `http://localhost:5000/get_recipes?userid=${userId}&search=${searchTerm}`,
          {
            method: 'GET',
            headers: {
              'API-Key': apiKey,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Set the fetched recipes to the state
        setRecipes(data.recipeDetails);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
      finally{
        setRecipes(demoRecipes);
      }
    };

    // Call the fetchRecipes function when the component mounts
    fetchRecipes();
  }, [searchTerm]);

  return (
    <div className="dashboard-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button className="add-recipe-button">Add Recipe</button>
      <div className="recent-recipes">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
