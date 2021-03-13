import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./cartItem/CarItem";

const subTotal = (cart) => {
  let result = 0;
  cart.forEach((product) => {
    result += product.price * product.inCartStock;
  });

  return result;
};

function Cart({ cart, setCart, setCartStock, cartStock }) {
  const classes = useStyles();
  if (cart.length > 0) {
    return (
      <>
        <Container>
          <div className={classes.toolbar}></div>
          <Typography className={classes.title} variant="h4">
            Tu carrito de compras{" "}
          </Typography>

          <Grid container spacing={3}>
            {cart.map((product) => (
              <Grid item xs={12} sm={4} key={product._id}>
                <CartItem
                  product={product}
                  cart={cart}
                  setCart={setCart}
                  setCartStock={setCartStock}
                  cartStock={cartStock}
                />
              </Grid>
            ))}
          </Grid>
          <div className={classes.cardDetails}>
            <Typography className={classes.subTotal} variant="h4">
              Subtotal: ${subTotal(cart)}
            </Typography>
            <div>
              <Button
                className={classes.emptyButton}
                size="large"
                type="button"
                variant="contained"
                color="secondary"
                onClick={() => {
                  cart.map((product) => {
                    product.stock += product.inCartStock;
                    product.inCartStock = 0;
                  });
                  setCart([]);
                  setCartStock(0);
                }}
              >
                Vaciar carrito
              </Button>
              <Button
                className={classes.checkoutButton}
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                Comprar
              </Button>
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Typography variant="subtitle1" className={classes.cartFalse}>
          No tienes ningun producto en tu carrito...
        </Typography>
      </>
    );
  }
}

export default Cart;
