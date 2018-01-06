const GpioController = require('../../utils/GpioController');

const onLight = async (req, res, next) => {
  try {
    console.log('light on');
    const lightController = new GpioController();
    await lightController.lightOnf();
    res.status(200).end();
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = onLight;