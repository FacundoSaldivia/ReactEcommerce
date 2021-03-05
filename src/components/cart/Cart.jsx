import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./cartItem/CarItem";

const subTotal = (cart) => {
  let result = 0;
  cart.forEach((product) => {
    result += product.price;
  });
  return result;
};

function Cart({ cart, setCart }) {
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
                <CartItem product={product} cart={cart} setCart={setCart} />
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
        <Typography variant="subtitle1">
          No tienes ningun producto en tu carrito...
        </Typography>
        ;
      </>
    );
  }
  //
  //

  //   //empty cart
  //   const EmptyCart = () => {

  //   };
  //   console.log(cart);
  //   //cart with items
  //   const FilledCart = () => {
  //     <>
  //       <Grid container spacing={3}></Grid>
  //       <div className={classes.cardDetails}>
  //         <Typography variant="h4">Subtotal: {4}</Typography>
  //         <div>
  //           <Button
  //             className={classes.emptyButton}
  //             size="large"
  //             type="button"
  //             variant="contained"
  //             color="secondary"
  //           >
  //             Vaciar carrito
  //           </Button>
  //           <Button
  //             className={classes.checkoutButton}
  //             size="large"
  //             type="button"
  //             variant="contained"
  //             color="primary"
  //           >
  //             Comprar
  //           </Button>
  //         </div>
  //       </div>
  //     </>;
  //   };

  //   return (
  //     <>
  //       <Container>
  //         <div className={classes.toolbar} />
  //         <Typography className={classes.title} variant="h3">
  //           Tu carrito de compras
  //         </Typography>
  //         {isEmpty ? <EmptyCart /> : <FilledCart />}
  //       </Container>
  //     </>
  //   );
}

export default Cart;
