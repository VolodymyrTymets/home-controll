const unsetTime = async (req, res, next) => {
  try {
    global.time = {};
    res.status(200).end();
  } catch (error) {
    return next(error);
  }
};

module.exports = unsetTime;
