import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { IJob } from "../../types";
import useStyles from "./styles";

interface JobCardProps {
  job: IJob;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onClick }) => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root} elevation={3} onClick={onClick}>
        <div>
          <Typography variant="h6" className={classes.title}>
            {job.title}
          </Typography>
          <Typography variant="h5">{job.company}</Typography>
          <Typography>{job.location}</Typography>
        </div>
        <div>
          <Typography>
            {job.created_at.split(" ").slice(0, 3).join(" ")}
          </Typography>
        </div>
      </Paper>
    </>
  );
};

export default JobCard;
