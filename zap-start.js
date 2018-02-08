const exeq = require('exeq');
const env = require('./config');

exeq(
  'echo Starting Tomcat...', 
  `cd ${env.ZAP}`,
  `fswatch -o -0 $${env.ZAP} | xargs -0 -n 1 -I {} cp -R ${env.ZAP}/web/* ${env.CATALINA_HOME}/webapps/ROOT & ${env.CATALINA_HOME}/bin/catalina.sh run & grunt watch`
);