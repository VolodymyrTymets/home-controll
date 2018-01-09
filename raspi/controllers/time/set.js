const moment = require('moment');

const setTime = async (req, res, next) => {
  try {
    const { from, to } = req.body;
    console.log(req.body)
    global.time =  global.time || {};

    global.time.from = moment().hour(from.hour).minute(from.minute).toDate();
    global.time.to = moment().hour(to.hour).minute(to.minute).toDate();

    res.status(200).end();
  } catch (error) {
    console.log(error)
    return next(error);
  }
};

module.exports = setTime;
