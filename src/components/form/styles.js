import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    paddingTop: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "50%",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    rowGap: "100px",
    columnGap: "20px",
  },
  description: { gridColumn: "auto / span 2" },
  button: {
    gridColumn: "auto / span 2",
    width: "98%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0%",
  },
  button2: {
    width: "100%",
    background: "#fefefe",
  },
  alert: {
    position: "absolute",
    width: "500px",
    right: "1rem",
    top: "85vh",
    margin: "20px 30px",
  },
}));
