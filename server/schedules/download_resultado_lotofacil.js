
/**
 * Note that Node Schedule is designed for in-process scheduling, i.e. 
 * scheduled jobs will only fire as long as your script is running, 
 * and the schedule will disappear when execution completes. 
 * If you need to schedule jobs that will persist even when 
 * your script isn't running, consider using actual cron.
 */
const func = () => {


   /**
    * 
    * Cron Style scheduling
    * 
    * *    *    *    *    *    *
    * ┬    ┬    ┬    ┬    ┬    ┬
    * │    │    │    │    │    │
    * │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
    * │    │    │    │    └───── month (1 - 12)
    * │    │    │    └────────── day of month (1 - 31)
    * │    │    └─────────────── hour (0 - 23)
    * │    └──────────────────── minute (0 - 59)
    * └───────────────────────── second (0 - 59, OPTIONAL)
    *  
    * */ 

   const schedule = require('node-schedule');
    /**
     * TODO
     */
}

module.exports = func;