import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  found: {
    fontSize: "2rem",
    color: "white",
    fontWeight: 500,
    marginLeft: "50px",
  },
  listDiv: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    gap: "20px",
  },
  pagination: {
    color: "white",
    padding: "10px",
    fontSize: "20px",
    fontWeight: 600
  }
}));

export default useStyles;
