const exeq = require('exeq');

exeq(
  `echo Cleaning boardwalk and zapv3...`
  `cd ${env.ZAP}`,
  `${env.JAVA_HOME}/bin/java -Dmaven.multiModuleProjectDirectory=${env.ZAP} -Dmaven.home=${env.M2_HOME} -Dclassworlds.conf=${env.M2_HOME}/bin/m2.conf -Dfile.encoding=UTF-8 -classpath ${env.M2_HOME}/boot/plexus-classworlds-2.5.2.jar org.codehaus.classworlds.Launcher -DskipTests=true clean -U`,
  `cd ${env.BOARDWALK}`,
  `${JAVA_HOME}/bin/java -Dmaven.multiModuleProjectDirectory=${BOARDWALK} -Dmaven.home=${M2_HOME} -Dclassworlds.conf=${M2_HOME}/bin/m2.conf -Dfile.encoding=UTF-8 -classpath ${M2_HOME}/boot/plexus-classworlds-2.5.2.jar org.codehaus.classworlds.Launcher -DskipTests=true clean -U`
)