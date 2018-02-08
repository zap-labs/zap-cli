const shellEnv = require('shell-env');
const env = shellEnv.sync();

module.exports = {
  CATALINA_HOME: env.CATALINA_HOME,
  M2_HOME: env.M2_HOME,
  JAVA_HOME: env.JAVA_HOME,
  ZAP: env.ZAP,
  BOARDWALK: env.BOARDWALK
};