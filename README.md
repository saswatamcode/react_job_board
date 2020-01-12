[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![GitHub forks](https://img.shields.io/github/forks/saswatamcode/react_job_board.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/saswatamcode/react_job_board/network/)
[![GitHub stars](https://img.shields.io/github/stars/saswatamcode/react_job_board.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/saswatamcode/react_job_board/stargazers/)
[![GitHub issues](https://img.shields.io/github/issues/saswatamcode/react_job_board.svg)](https://GitHub.com/saswatamcode/react_job_board/issues/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=101)](https://github.com/ellerbrock/javascript-badges/)



# React Job Board
A web application which lists various jobs using the Github Jobs API. Built using React, Node.js, Express and Redis.

## Description
A simple web application which consists of a data feed, an API and a client end. The data feed is a cron job which fires every hour and gets updated jobs from Github Jobs and then populates it into a Redis datastore. The node.js API fetches jobs from redis and presents it to the frontend built with React and material-ui.

## To run
- Clone into repo
- Run `npm i`
- Make sure Redis server is working
- Run `node worker/index.js`
- Open new terminal window in same folder and run `node api/index.js`
- Cd into client and run `npm i`
- Run `npm start`

