import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "20px",
    padding: "20px",
    margin: "5px",
    display: "flex",
    background: "white",
    textAlign: "left",
    justifyContent: "space-between",
    boxShadow: "10px 10px 10px 0px rgba(0,0,0,0.18)",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.1) translate(50px)",
      background: "white",
    },
  },
  title: {
    fontWeight: 600,
  },
}));

export default useStyles;
