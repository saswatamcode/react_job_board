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
}));

export default useStyles;
