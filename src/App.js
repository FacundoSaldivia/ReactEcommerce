import React, { useState, useEffect } from "react";
import Products from "./components/products/Products";
import NavBar from "./components/nabvar/Navbar";
import Cart from "./components/cart/Cart";
import Form from "./components/form/Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import useStyles from "./styles";
function App() {
  // getting data

  const [products, setProducts] = React.useState([]);
  async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json();
    loading(data);
  }
  useEffect(() => {
    if (products.length === 0) {
      getJson("https://shrouded-sierra-86446.herokuapp.com/posts");
    }
  }, []);

  // cart
  const [cart, setCart] = useState([]);
  const [cartStock, setCartStock] = useState(0);

  // import clases
  const classes = useStyles();

  // loading ?
  const [isLoading, setIsloading] = React.useState(true);
  const loading = (data) => {
    setProducts(data);
    setIsloading(false);
  };

  // show loading screen
  if (isLoading) {
    return (
      <>
        <Router>
          <NavBar
            products={products}
            cart={cart}
            cartStock={cartStock}
          ></NavBar>
          <main className={classes.loading}>
            <h1 className={classes.loadingText}>Loading...</h1>
          </main>
        </Router>
      </>
    );
  }

  // when finishes loading
  return (
    <Router>
      <NavBar products={products} cart={cart} cartStock={cartStock}></NavBar>
      <Switch>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            setCart={setCart}
            setCartStock={setCartStock}
            cartStock={cartStock}
          ></Cart>
        </Route>

        <Route exact path="/ReactEcommerce">
          <Products
            setProducts={setProducts}
            products={products}
            cart={cart}
            setCart={setCart}
            setCartStock={setCartStock}
          ></Products>
        </Route>
        <Route exact path="/form">
          <Form></Form>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
