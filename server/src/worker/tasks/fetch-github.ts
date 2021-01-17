import fetch from "node-fetch";
import Redis from "ioredis";
import { IJob } from "../../types";
import log from "../../utils/logger";

const redis = new Redis();

const baseURL = "https://jobs.github.com/positions.json";

const fetchGithub = async () => {
  log.info("Start fetching GitHub Jobs");
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
      log.info(`Fetch ${resultCount} jobs on page ${onPage}`);
    } catch (err) {
      log.error("GitHub Jobs fetch error: %s", err.message);
    }
  }

  redis.set("github", JSON.stringify(allJobs));
  log.info(`Setting ${allJobs.length} jobs into redis`);
};

export { fetchGithub };
