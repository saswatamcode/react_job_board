import { IJob } from "../types";
import Typography from "@material-ui/core/Typography";
import JobCard from "./JobCard";

interface JobListProps {
  jobs: [IJob];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <>
      <Typography>Found {jobs.length} jobs</Typography>
      <div style={{ display: "flex", flexDirection: "column", width: "90%", gap: "20px" }}>
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </>
  );
};

export default JobList;
