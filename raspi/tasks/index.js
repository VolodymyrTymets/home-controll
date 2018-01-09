const cron = require('node-cron');
const { switchLight } = require('./switch-light');


/**
 *

             # ┌────────────── second (optional)
             # │ ┌──────────── minute
             # │ │ ┌────────── hour
             # │ │ │ ┌──────── day of month
             # │ │ │ │ ┌────── month
             # │ │ │ │ │ ┌──── day of week
             # │ │ │ │ │ │
             # │ │ │ │ │ │
             # * * * * * *
 * **/
cron.schedule('30 * * * * *', switchLight);