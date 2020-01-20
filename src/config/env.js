require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV || 'development';
const HOST =  process.env.HOST ||  '0.0.0.0';
const PORT =  process.env.PORT ||  '3000';
const LOG_LEVEL =  process.env.LOG_LEVEL ||  'debug';

module.exports = {
  NODE_ENV,
  HOST,
  PORT,
  LOG_LEVEL
};
