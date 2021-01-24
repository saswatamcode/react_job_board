import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="h1">
      GitHub Job Board
    </Typography>
  );
};

export default Header;
