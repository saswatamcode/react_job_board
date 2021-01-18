import { Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { IJob } from "../types";

interface JobCardProps {
  job: IJob;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <>
      <Paper elevation={3}>
        <div>
          <Typography variant="h6">{job.title}</Typography>
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
