import { config as envConfig} from 'dotenv';

envConfig();

export default {
  serverInstance: process.env.SERVER_HOST || 'localhost',
  serverPort: parseInt(process.env.SERVER_PORT) || 3040,
  env: process.env.NODE_ENV || 'development'
};
