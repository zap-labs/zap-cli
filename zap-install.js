const exeq = require('exeq');
const env = require('./config');

exeq(
  'echo Installing boardwalk and zapv3...',
  `cd ${env.BOARDWALK} && ${env.JAVA_HOME}/bin/java -Dmaven.multiModuleProjectDirectory=${env.BOARDWALK} -Dmaven.home=${env.M2_HOME} -Dclassworlds.conf=${env.M2_HOME}/bin/m2.conf -Dfile.encoding=UTF-8 -classpath ${env.M2_HOME}/boot/plexus-classworlds-2.5.2.jar org.codehaus.classworlds.Launcher -DskipTests=true install -P maestro-aur && cd ${env.ZAP} && ${env.JAVA_HOME}/bin/java -Dmaven.multiModuleProjectDirectory=${env.ZAP} -Dmaven.home=${env.M2_HOME} -Dclassworlds.conf=${env.M2_HOME}/bin/m2.conf -Dfile.encoding=UTF-8 -classpath ${env.M2_HOME}/boot/plexus-classworlds-2.5.2.jar org.codehaus.classworlds.Launcher -DskipTests=true install -P maestro-aur && cp ~/.m2/repository/com/ziprealty/zapp/DEVELOP-SNAPSHOT/zapp-DEVELOP-SNAPSHOT.war ${env.CATALINA_HOME}/webapps/ROOT.war`
);