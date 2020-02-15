import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import path from 'path';

import Html from './Html';

import dotEnv from 'dotenv';

dotEnv.config();

let server = express();
const PORT = process.env.APP_PORT || 4040;

server.use(express.static(path.join('dist')));

server.get('/', (req, res) => res.send(ReactDOMServer.renderToString(<Html/>)));

server.post('/data', (req, res) => res.json({user: "AP"}));

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Failed to load server. ${err}`)
    return;
  }
  console.log(`running server in port ${PORT}`);
});
