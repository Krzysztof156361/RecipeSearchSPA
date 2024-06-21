import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)({
  marginBottom: "20px",
});

function NavBar() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <h1>Recipe Search</h1>
      </Toolbar>
    </StyledAppBar>
  );
}

export default NavBar;
