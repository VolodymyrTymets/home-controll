const GpioController = require('../../utils/GpioController');

const offLight = async (req, res, next) => {
  try {
    console.log('light off');
    const lightController = new GpioController();
    await lightController.lightOnf();
    res.status(200).end();
  } catch (error) {
    console.log('Gpio not detected');
    return next(error);
  }
};

module.exports = offLight;
