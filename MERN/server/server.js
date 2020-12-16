import bodyParser     from 'body-parser';
import clientSessions from 'client-sessions';
import cookieParser   from 'cookie-parser';
import cors           from 'cors';
import express        from 'express';
import helmet         from 'helmet';
import path           from 'path';

import config         from './appConfig';

const app = express();
console.log('config', config);
let {
  serverInstance,
  serverPort,
  env
} = config;

app.use(helmet());
app.use(cors());
app.options('*', cors());
app.use(express.static(path.join(__dirname)));

/* Enable hot reload for dev mode */
if (env === 'development') {
  let webpackDevMiddleware = require("webpack-dev-middleware");
  let webpackHotMiddleware = require("webpack-hot-middleware");
  let webpack = require('webpack');
  let webpackConfig = require('../webpack/dev.hot.js');
  let compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'client.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(clientSessions({
  cookieName: 'session_ap',
  secret: process.env.COOKIE_SECRET,
  // duration: 60 * 1000, check the use
  cookie:{
    maxAge: 6000,
    // path: '/home', set session for specified path
    expires: new Date(Date.now() + 10000)
  }
}));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

/* Start server */
app.listen(serverPort, function(err) {
  if (err) {
    console.error('Failed with ', err);
    return;
  }
  console.log('Server running in', serverPort);
});
