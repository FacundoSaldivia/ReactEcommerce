import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
function CarItem({ product, cart, setCart, cartStock, setCartStock }) {
  const classes = useStyles();
  const [stock, setStock] = useState(product.inCartStock);
  return (
    <Card>
      <CardMedia className={classes.media} image={product.imageUrl} />
      <CardContent className={classes.cardContent}>
        <div className={classes.grid}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography className={classes.price} variant="h5">
            ${product.price}
          </Typography>
          <Typography variant="h5"> X{stock}</Typography>
        </div>
      </CardContent>
      <Button
        onClick={() => {
          if (product.inCartStock > 1) {
            product.stock++;
            product.inCartStock--;
          } else {
            let newCart = cart.filter(
              (producto) => producto._id !== product._id
            );
            setCart(newCart);
            product.stock++;
            product.inCartStock--;
          }
          setStock(product.inCartStock);
          setCartStock(cartStock - 1);
        }}
        className={classes.button}
        variant="contained"
        type="button"
        color="secondary"
      >
        Remover
      </Button>
      <CardActions className={classes.cardActions}></CardActions>
    </Card>
  );
}

export default CarItem;
