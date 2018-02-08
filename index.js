#!/usr/bin/env node
const program = require('commander');

program
  .command('install', 'install boardwalk and zapv3')
  .command('start', 'start zapv3 tomcat server')
  .command('stop', 'force quit zapv3 tomcat server')
  .command('watch', 'start zapv3 file watch and grunt watch')
  .command('clean', 'clean boardwalk and zapv3')
  .parse(process.argv);