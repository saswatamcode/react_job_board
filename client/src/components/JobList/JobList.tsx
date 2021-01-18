import { useState } from "react";
import { IJob } from "../../types";
import Typography from "@material-ui/core/Typography";
import JobCard from "./../JobCard/JobCard";
import JobModal from "./../JobModal/JobModal";
import useStyles from "./styles";

interface JobListProps {
  jobs: [IJob];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<IJob>();
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography className={classes.found}>
        Found {jobs.length} jobs
      </Typography>
      <div className={classes.listDiv}>
        {jobs.map((job) => (
          <JobCard
            job={job}
            key={job.id}
            onClick={() => {
              handleClickOpen();
              setSelectedJob(job);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default JobList;
