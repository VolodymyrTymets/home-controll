var Gpio = require('onoff').Gpio;

class GpioController {
  constructor(lightNumber = 17) {
    this._led = new Gpio(lightNumber, 'out');
  }

  lightOn() {
    return new Promise((resolve,reject) => {
        this._led.write(1, (err, value) => {
          if (err) return reject(err);
          return resolve(value)
        });
    });
  }
  lightOff() {
    return new Promise((resolve,reject) => {
      this._led.write(0, (err, value) => {
        if (err) return reject(err);
        return resolve(value)
      });
    });
  }
}
module.exports = GpioController;