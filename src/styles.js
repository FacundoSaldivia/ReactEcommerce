import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  loading: {
    transition: "1s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "97vh",
    width: "10wh",
    backgroundColor: theme.palette.background.default,
  },
  loadingText: {
    fontSize: "500%",
    fontWeight: "500",
  },
}));
