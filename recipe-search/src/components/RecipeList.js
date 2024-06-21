import React from "react";
import { Grid } from "@mui/material";
import Recipe from "./Recipe";

function RecipeList({ recipes }) {
  return (
    <Grid container justifyContent="center">
      {recipes.map((recipe) => (
        <Recipe key={recipe.uri} recipe={recipe} />
      ))}
    </Grid>
  );
}

export default RecipeList;
