import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
function CarItem({ product, cart, setCart }) {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia className={classes.media} image={product.imageUrl} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="h5">{product.price}</Typography>
      </CardContent>
      <Button
        onClick={() => {
          let newCart = cart.filter((producto) => producto._id !== product._id);
          setCart(newCart);
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
