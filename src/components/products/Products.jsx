import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./product/Product";

import useStyles from "./styles";
// Calling data from api and pushing it to an array

const Products = ({ products, cart, setCart, setCartStock }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Grid className={classes.toolbar} container justify="center" spacing={8}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} m={4} lg={3}>
            <Product
              product={product}
              setCart={setCart}
              cart={cart}
              setCartStock={setCartStock}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
