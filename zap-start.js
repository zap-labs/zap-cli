const exeq = require('exeq');
const env = require('./config');

exeq(
  `mv ${env.CATALINA_HOME}/webapps/ROOT ~/.Trash`,
  `${env.CATALINA_HOME}/bin/catalina.sh run`
);