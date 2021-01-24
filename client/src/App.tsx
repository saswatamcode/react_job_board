import axios from "axios";
import { useEffect, useState } from "react";
import JobList from "./components/JobList/JobList";
import Header from "./components/Header/Header";
import { IJob } from "./types";
import Loading from "./components/Loading/Loading";

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
  return (
    <div className="App">
      <Header />
      {!jobs && <Loading />}
      {jobs && <JobList jobs={jobs} />}
    </div>
  );
};

export default App;
