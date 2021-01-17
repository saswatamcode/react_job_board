import cron from "cron";
import { fetchGithub } from "./tasks/fetch-github";

const CronJob = cron.CronJob;

const job = new CronJob(
  "* * * * *",
  fetchGithub,
  null,
  true,
  "America/Los_Angeles"
);

console.log("Start cron job");

job.start();
