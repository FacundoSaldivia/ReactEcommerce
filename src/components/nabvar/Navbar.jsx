import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import logo from "../../img/ecommerce.png";
import { Link } from "react-router-dom";
function Navbar({ cartStock }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/ReactEcommerce"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
          </Typography>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/form"
              arial-label="Show cart items"
              color="inherit"
            >
              <Badge color="secondary">Vender</Badge>
            </IconButton>{" "}
            <IconButton
              component={Link}
              to="/cart"
              arial-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={cartStock} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>{" "}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
