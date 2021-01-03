import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import logo from "./images/logo.png";
import React from "react";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        style={{
          background: "linear-gradient(45deg, #19B5FE,#00AC61)",
          color: "black",
        }}
      >
        <Toolbar variant="dense">
          <IconButton>
            <img src={logo} alt="." height="30px" width="30px" />
          </IconButton>
          <Typography>Cricket Score</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
