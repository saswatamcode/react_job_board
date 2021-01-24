import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  imageDiv: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  apply: {
    color: "white",
    fontWeight: 600,
    background: "blue",
    "&:hover": {
      color: "blue",
    },
  },
  link: {
    textDecoration: "none",
  },
}));

export default useStyles;
