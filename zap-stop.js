const exeq = require('exeq');

exeq(
  'pkill -9 -f tomcat',
  'echo Tomcat killed.'
);