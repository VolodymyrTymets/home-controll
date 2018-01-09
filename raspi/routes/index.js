const express = require('express');

const light = require('../controllers/light');
const time = require('../controllers/time');

const routers = () => {
    const router = express();

    // api routes v1 (/api/v1)
    router.use('/light', light());
    router.use('/time', time());
    return router;
};

module.exports = routers;

