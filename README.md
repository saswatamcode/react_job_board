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

