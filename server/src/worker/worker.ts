import cron from "cron";
import { fetchGithub } from "./tasks/fetch-github";
import log from "../utils/logger";

const CronJob = cron.CronJob;

const job = new CronJob(
  "0 * * * *",
  fetchGithub,
  null,
  true,
  "America/Los_Angeles"
);

log.info("Starting cron job");

job.start();
