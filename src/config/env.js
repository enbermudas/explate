require('dotenv-safe').config();

const { NODE_ENV } = process.env;
const { HOST } = process.env;
const { PORT } = process.env;
const { LOG_LEVEL } = process.env;

module.exports = {
  NODE_ENV,
  HOST,
  PORT,
  LOG_LEVEL
};
