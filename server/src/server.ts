import express, { Request, Response } from "express";
import Redis from "ioredis";
import cors from "cors";
import { IJob } from "./types";

const app = express();
const port = process.env.PORT;

app.use(cors());

const redis = new Redis();

app.get("/jobs", async (_req: Request, res: Response) => {
  redis.get("github", (err, result) => {
    if (result) {
      const jobs: IJob[] = JSON.parse(result);
      console.log("read redis");
      console.log(jobs.length);
      res.statusCode = 200;
      return res.json(jobs);
    }
    console.error(err);
    res.statusCode = 500;
    return res.json({ message: err });
  });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
