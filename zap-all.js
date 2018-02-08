const exeq = require('exeq');
const env = require('./config');

exeq(
  'zap clean',
  'zap install',
  'zap start'
);