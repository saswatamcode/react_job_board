import { Button } from "@material-ui/core";
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
      <Button className={classes.root} onClick={onClick}>
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
      </Button>
    </>
  );
};

export default JobCard;
