import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: "20px",
});

function Recipe({ recipe }) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="140"
        image={recipe.image}
        alt={recipe.label}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {recipe.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calories: {recipe.calories.toFixed(2)}
        </Typography>
        <Button
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          color="primary"
        >
          View Recipe
        </Button>
      </CardContent>
    </StyledCard>
  );
}

export default Recipe;
