import express from 'express';
import path    from 'path';
import Html from '../home.html';
import React from 'react';
// import Html from '../home.js';
import ReactDOMServer from 'react-dom/server';
import config         from '../../appConfig';

let { env } = config;

let router = express.Router();

router.get('/', function (req, res) {
  // res.sendFile('home.html', { root: path.join(__dirname, '../') });
  res.send(Html({env}));
});

module.exports = router;
