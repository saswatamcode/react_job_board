import fetch from "node-fetch";
import Redis from "ioredis";
import { IJob } from "../../types";

const redis = new Redis();

const baseURL = "https://jobs.github.com/positions.json";

const fetchGithub = async () => {
  console.log("fetching");
  var resultCount = 1;
  var onPage = 0;
  var allJobs: IJob[] = [];

  //fetch all pages
  while (resultCount > 0) {
    try {
      const res = await fetch(`${baseURL}?page=${onPage}`);
      const jobs = await res.json();
      allJobs.push(...jobs);
      resultCount = jobs.length;
      onPage++;
      console.log("res", resultCount);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(allJobs.length);

  //filter
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr") ||
      jobTitle.includes("architect")
    ) {
      return false;
    }
    return true;
  });

  console.log("filtered to", jrJobs.length);
  redis.set("github", JSON.stringify(jrJobs));
  console.log("set to redis");
};

export { fetchGithub };
