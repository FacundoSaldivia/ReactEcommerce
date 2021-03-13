import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    marginLeft: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    width: "100%",
    gridGap: "10px",
  },
  price: {
    textAlign: "right",
    fontSize: "180%",
  },
}));
