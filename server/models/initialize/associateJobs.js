// associateJobs.js

var db = require('../index');

/*  ASSOCIATE JOBS WORKING -  
  1/5 = 3 PM
  This is working 100% fine.  to make sure it runs in the cron job,  uncomment lies 10 and 38
 */

module.exports = function() {
// get all users from the table, and include the parameter table
  db['User'].findAll({
    include: [ db['Parameter'] ]
  }).then((users) => {
    // each item returned is a User array
    users.forEach((user, index) => {
      // each user has a Parameter's array    
      user.Parameters.forEach((item, index) => {
        db['Parameter'].find({
          where: {
            id: item.id
          },
          include: [ db['Job'] ]
        }).then( job => {
        // this gets the Jobs associated with the parameter
          job.Jobs.forEach((item, index) => {
            //var statusArr = ['new', 'favored'];
            //var rand = Math.floor(Math.random() * 2 );
           // console.log('accociated');
            user.addJobs(item.id, {status: 'new', createdAt: new Date(), updatedAt: new Date() } );
          });
        }).catch((err) => {
          console.error(err);       
        });
      });
    });
  });
};