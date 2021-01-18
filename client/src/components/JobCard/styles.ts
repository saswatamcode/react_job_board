import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    padding: "20px",
    margin: "5px",
    display: "flex",
    justifyContent: "space-between",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.1) translate(50px)",
    },
  },
  title: {
    fontWeight: 600,
  },
}));

export default useStyles;
