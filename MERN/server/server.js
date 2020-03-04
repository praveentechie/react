import bodyParser     from 'body-parser';
import clientSessions from 'client-sessions';
import cookieParser   from 'cookie-parser';
import cors           from 'cors';
import express        from 'express';
import helmet         from 'helmet';
import path           from 'path';
import mongoose       from 'mongoose';
// Import all routes
import userRoute      from './routes/userRoute';
import viewRoute      from './routes/viewRoute';
import config         from '../appConfig';

let app = express();
console.log('config', config);
let {
  serverInstance,
  serverPort = 3008,
  dbInstance,
  dbPort,
  env
} = config;

app.use(helmet());
app.use(cors());
app.options('*', cors());
// app.use(express.static(path.join(__dirname, './home.html')));
app.use('/dist', express.static(path.join(__dirname, '/dist')));

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
app.use(cookieParser('s0meRand7Secret'));
app.use(clientSessions({
  cookieName: 'session_ap',
  secret: 's0meRand7Secret',
  // duration: 60 * 1000, check the use
  cookie:{
    maxAge: 6000,
    // path: '/home', set session for specified path
    expires: new Date(Date.now() + 10000)
  }
}));

app.use('/', viewRoute);
app.use('/v*/users', userRoute);
app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
});

/* Replace depricated mongo promise and use from Node */
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbInstance}:${dbPort}/mern`).then((db)=> {
  console.log('Connected to db');
}).catch(err => {
  console.log('Failed to connect to db', err);
});

/* Start server */
app.listen(serverPort, function(err) {
  if (err) {
    console.error('Failed with ', err);
    return;
  }
  console.log('Server running in', serverPort);
});
