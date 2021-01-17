import express, { Request, Response } from "express";
import Redis from "ioredis";
import cors from "cors";
import { IJob } from "./types";
import log from "./utils/logger";

const app = express();
const port = process.env.PORT;

app.use(cors());

const redis = new Redis();

app.get("/jobs", async (_req: Request, res: Response) => {
  log.info("/jobs endpoint hit");
  redis.get("github", (err, result) => {
    if (result) {
      const jobs: IJob[] = JSON.parse(result);
      log.info("Read redis and return %s jobs", jobs.length);
      return res.status(200).json(jobs);
    }
    log.error("Redis key error: %s", err?.message);
    return res.status(500).json({ message: err });
  });
});

app.listen(port, () => log.info(`App listening on port ${port}`));
