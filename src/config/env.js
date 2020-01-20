require('dotenv-safe').config();

const NODE_ENV = process.env.NODE_ENV;
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const LOG_LEVEL = process.env.LOG_LEVEL;

module.exports = {
  NODE_ENV,
  HOST,
  PORT,
  LOG_LEVEL
};
