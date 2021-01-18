import axios from "axios";
import { useEffect, useState } from "react";
import JobList from "./components/JobList";
import { IJob } from "./types";

const App: React.FC = () => {
  const [jobs, setJobs] = useState<[IJob]>();

  const fetchData = () => {
    axios
      .get("http://localhost:9000/jobs")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => fetchData(), []);
  return <div className="App">{jobs && <JobList jobs={jobs} />}</div>;
};

export default App;
