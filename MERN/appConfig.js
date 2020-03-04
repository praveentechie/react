let config = require('dotenv').config({path: './.env'});
console.log('config', config);
let configOptions = config.parsed;
configOptions = {
  SERVER_PORT: 3008,
  ENV: 'development'
}

export default {
  serverInstance: configOptions.SERVER_INSTANCE,
  serverPort: parseInt(configOptions.SERVER_PORT),
  dbInstance: configOptions.DB_INSTANCE,
  dbPort: parseInt(configOptions.DB_PORT),
  env: configOptions.ENV
};
