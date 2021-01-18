import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  found: {
    fontSize: "2rem",
    color: "white",
    fontWeight: 500,
  },
  listDiv: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    gap: "20px",
  },
}));

export default useStyles;
