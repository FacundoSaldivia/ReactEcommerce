import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import axios from "axios";

import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const checkUrl = (url) => {
  axios
    .get(url)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

function Product({ product, setCart, cart, setCartStock }) {
  checkUrl(product.imageUrl);
  const addToCart = () => {
    console.log(product);
    let repetido = false;
    let stock = 1;
    cart.forEach((product2) => {
      stock += product2.inCartStock;

      // compares to see if the cart already has the product
      if (product2._id === product._id) {
        repetido = true;
      } else {
        repetido = false;
      }
    });
    if (!repetido) {
      // if it doesnt it addes it
      setCart((prev) => [...prev, product]);
      product.inCartStock++;
      product.stock--;
    } else {
      // else just changes the stock
      product.inCartStock++;
      product.stock--;
    }
    setCartStock(stock);
  };

  const [algo, setAlgo] = useState(false);
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onMouseEnter={() => setAlgo(true)}
      onMouseLeave={() => setAlgo(true)}
    >
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.title}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6">{`$${product.price}`}</Typography>
        </div>

        <Typography
          className={classes.description}
          variant="body2"
          color="textSecondary"
        >
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        {product.stock ? (
          <>
            <IconButton onClick={() => addToCart()} aria-label="Add to cart">
              <AddShoppingCart />
            </IconButton>
            <Typography variant="body2">stock:{product.stock}</Typography>
          </>
        ) : (
          <IconButton aria-label="Add to cart">
            <Typography variant="body2">Sin stock</Typography>
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

export default Product;
