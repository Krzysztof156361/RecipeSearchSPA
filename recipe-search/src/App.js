import React, { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css";
// W terminalu należy wykonać polecenie cd recipe-Search
// A następnie drugie polecenie npm start
const APP_ID = "edc14d1a";
const APP_KEY = "bd96fea3a278fc899acf497425de881c";

function App() {
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (query) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      );
      setRecipes(response.data.hits.map((hit) => hit.recipe));
    } catch (error) {
      console.error("Error fetching the recipes:", error);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <SearchBar onSearch={searchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
