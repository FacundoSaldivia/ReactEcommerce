import React, { useState, useEffect } from "react";
import Products from "./components/products/Products";
import NavBar from "./components/nabvar/Navbar";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import useStyles from "./styles";
function App() {
  // cart
  const [cart, setCart] = useState([]);
  // import clases
  const classes = useStyles();

  // loading ?
  const [isLoading, setIsloading] = React.useState(true);
  const loading = (data) => {
    setProducts(data);
    setIsloading(false);
  };

  // getting data
  const [products, setProducts] = React.useState([]);
  async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json();
    loading(data);
  }
  useEffect(() => {
    getJson("https://shrouded-sierra-86446.herokuapp.com/posts");
  }, []);

  // show loading screen
  if (isLoading) {
    return (
      <>
        <main className={classes.loading}>
          <h1 className={classes.loadingText}>Loading...</h1>
        </main>
      </>
    );
  }

  // when finishes loading
  return (
    <BrowserRouter>
      <NavBar cart={cart}></NavBar>
      <Switch>
        <Route exact path="/cart">
          <Cart cart={cart} setCart={setCart}></Cart>
        </Route>

        <Route exact path="/">
          <Products
            products={products}
            cart={cart}
            setCart={setCart}
          ></Products>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
