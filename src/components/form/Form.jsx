import React, { useState } from "react";
import useStyles from "./styles";
import { TextField } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { InputAdornment, Button, CardActions } from "@material-ui/core";
import axios from "axios";

function Form() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [urlImg, setUrlImg] = useState("");
  const [stock, setStock] = useState();
  const [description, setDescription] = useState("");
  const [alertType, setAlertType] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMensaje, setAlertMensaje] = useState("");
  const [alert, setAlert] = useState(false);

  const setToZero = () => {
    setTitle("");
    setPrice(0);
    setUrlImg("");
    setStock();
    setDescription("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://shrouded-sierra-86446.herokuapp.com/posts", {
        imageUrl: urlImg,
        stock: stock,
        title: title,
        description: description,
        price: price,
      })
      .then(
        (response) => {
          console.log(response);
          setAlertType("success");
          setAlertTitle("Exito");
          setAlertMensaje("La operacion fue un exito !");
        },
        (error) => {
          console.log(error.response.data.message.message);
          setAlertType("error");
          setAlertTitle("ERROR");
          setAlertMensaje(error.response.data.message.message);
        }
      );
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 10000);

    setToZero();
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <form
          id="login"
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          {" "}
          <TextField
            id="titulo"
            label="Producto"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            type="number"
            id="precio"
            label="Precio"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <TextField
            id="img"
            label="Url de la imagen (opcional)"
            onChange={(e) => setUrlImg(e.target.value)}
            value={urlImg}
          />
          <TextField
            type="number"
            id="stock"
            label="Cantidad de unidades"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
          />
          <TextField
            className={classes.description}
            id="description"
            label="Descripcion"
            multiline={true}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <CardActions className={classes.button}>
            <Button size="small" type="submit" className={classes.button2}>
              Submit
            </Button>
          </CardActions>
        </form>
      </div>
      {alert ? (
        <div className={classes.alert}>
          {" "}
          <Alert severity={alertType}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {alertMensaje}
          </Alert>
        </div>
      ) : (
        console.log("asd")
      )}
    </>
  );
}

export default Form;
