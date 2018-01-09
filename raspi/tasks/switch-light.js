const moment = require('moment');
const GpioController = require('../utils/GpioController');

const switchLight = async () => {
  try {
    if (global.time && global.time.from) {
      if (moment().isBetween(moment(global.time.from), moment(global.time.from))) {
        const lightController = new GpioController();
        await lightController.lightOff();
      } else {
        const lightController = new GpioController();
        await lightController.lightOff();
      }
    }
  } catch (error) {
    console.log(error)
  }

};

module.exports = { switchLight };