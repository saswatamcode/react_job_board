import { useState } from "react";
import { IJob } from "../../types";
import { MobileStepper, Typography, Button } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
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

  //pagination
  const [activeStep, setActiveStep] = useState<number>(0);
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs / 50);
  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
        {jobsOnPage.map((job) => (
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
      <div className={classes.pagination}>
        Page {activeStep + 1} of {numPages}
      </div>
      <MobileStepper
        variant="dots"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === numPages - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </>
  );
};

export default JobList;
