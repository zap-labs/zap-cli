const exeq = require('exeq');
const env = require('./config');

exeq(
  `${env.CATALINA_HOME}/bin/catalina.sh run`
);