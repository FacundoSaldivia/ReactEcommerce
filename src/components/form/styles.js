import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    paddingTop: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: "150px",
    },
  },
  form: {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    rowGap: "100px",
    columnGap: "20px",
    [theme.breakpoints.up("md")]: {
      rowGap: "100px",
      width: "50%",
    },
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
    marginTop: "20px",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "500px",
      right: "1rem",
      top: "85vh",
      margin: "20px 30px",
    },
  },
}));
