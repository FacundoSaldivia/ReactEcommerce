import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyles from "./styles";
import CartItem from "./cartItem/CarItem";
import GooglePayButton from "@google-pay/button-react";
import axios from "axios";
let total = "";

const subTotal = (cart) => {
  let result = 0;
  cart.forEach((product) => {
    result += product.price * product.inCartStock;
  });
  total = result.toString();
  return result;
};

const CheckOut = (cart, setCart) => {
  cart.forEach((product) => {
    let newStock = product.stock - product.inCartStock + 1;
    axios.patch(
      `https://shrouded-sierra-86446.herokuapp.com/posts/${product._id}`,
      {
        stock: newStock,
      }
    );

    let newCart = cart.filter((producto) => producto._id !== product._id);
    setCart(newCart);
    product.inCartStock = 0;
    product.stock = newStock;
    console.log(product._id);
  });
  console.log(cart);
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
              {total ? (
                <GooglePayButton
                  className={classes.gpayButton}
                  environment="TEST"
                  paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                      {
                        type: "CARD",
                        parameters: {
                          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                          allowedCardNetworks: ["MASTERCARD", "VISA"],
                        },
                        tokenizationSpecification: {
                          type: "PAYMENT_GATEWAY",
                          parameters: {
                            gateway: "example",
                            gatewayMerchantId: "expampleGatewayMerchantId",
                          },
                        },
                      },
                    ],
                    merchantInfo: {
                      merchantId: "12345678901234567890",
                      merchantName: "Demo Merchant",
                    },
                    transactionInfo: {
                      totalPriceStatus: "FINAL",
                      totalPriceLabel: "Total",
                      totalPrice: total,
                      currencyCode: "ARS",
                      countryCode: "AR",
                    },
                    shippingAddressRequired: false,
                    callbackIntents: ["PAYMENT_AUTHORIZATION"],
                  }}
                  onLoadPaymentData={(paymentRequest) => {
                    console.log("exito", paymentRequest);
                    CheckOut(cart, setCart);
                  }}
                  onPaymentAuthorized={(paymentData) => {
                    console.log("Payment Authorised Success", paymentData);
                    return { transactionState: "SUCCESS" };
                  }}
                  existingPaymentMethodRequired="false"
                  buttonColor="black"
                  buttontType="Buy"
                ></GooglePayButton>
              ) : (
                console.log()
              )}
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
