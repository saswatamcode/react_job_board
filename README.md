[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![GitHub forks](https://img.shields.io/github/forks/saswatamcode/react_job_board.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/saswatamcode/react_job_board/network/)
[![GitHub stars](https://img.shields.io/github/stars/saswatamcode/react_job_board.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/saswatamcode/react_job_board/stargazers/)
[![GitHub issues](https://img.shields.io/github/issues/saswatamcode/react_job_board.svg)](https://GitHub.com/saswatamcode/react_job_board/issues/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=101)](https://github.com/ellerbrock/javascript-badges/)

# GitHub Job Board

A web application which lists various jobs using the Github Jobs API. Built using React, Node.js, Express, Cron, TypeScript and Redis.

## Description

A simple web application which consists of a data feed, an API and a client end. The data feed is a cron job which fires every hour and gets updated jobs from Github Jobs and then populates it into a Redis datastore. The node.js API fetches jobs from redis and presents it to the frontend built with React, material-ui and TypeScript.

## Screenshot

![Screenshot-1!](screenshots/Screenshot-1.png) ![Screenshot-2!](screenshots/Screenshot-2.png)

## Dependencies

### For server

- `express`: For server
- `cron`: For running cron job
- `ioredis`: Redis client
- `node-fetch`: For making API calls
- `winston`: Logger
- `typescript`
- `prettier`

### For client

- `react`
- `material-ui`: For styling
- `axios`: For API calls
- `react-loader-spinner`: For loading animation
- `typescript`
- `prettier`

## To run

- Clone into repo

### For worker and server

- Cd into `server`
- Make sure your local Redis server is up and running
- Run `yarn` to install packages
- Run `yarn watch`
- Fire up a new terminal in same directory and run `yarn run dev-worker`
- Fire up a new terminal in same directory and set an env var `PORT` to `9000`
- Run `yarn run dev`
- Your worker and server should have started. If the hourly cron job is too slow, change cron tab in `src/worker/worker.ts`

### For client

- Cd into client and run `yarn`
- Run `yarn start`
