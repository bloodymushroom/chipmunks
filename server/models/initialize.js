// initialize.js
var associate         = require('./initialize/associateJobs');
var initJobs          = require('./initialize/initJobs');
var initParams        = require('./initialize/initParams');
var initUsers         = require('./initialize/initUser');
var initActions       = require('./initialize/initActions');
var initContacts      = require('./initialize/initContacts');
// var initCron          = require('./initialize/initCron');
var initIndeedCrawler = require('./initialize/initIndeedCrawler');


initJobs();
setTimeout(initParams, 2000);
setTimeout(initUsers, 4000);
setTimeout(associate, 6000);
setTimeout(initContacts, 12000);
setTimeout(initActions, 15000);
setTimeout(initIndeedCrawler, 20000);



