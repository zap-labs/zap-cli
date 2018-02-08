const exeq = require('exeq');
const env = require('./config');

exeq(
  `rm -rf ${env.CATALINA_HOME}/webapps/ROOT`,
  `${env.CATALINA_HOME}/bin/catalina.sh run`
);