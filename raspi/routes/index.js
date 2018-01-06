const express = require('express');

const light = require('../controllers/light');

const routers = () => {
    const router = express();

    // api routes v1 (/api/v1)
    router.use('/light', light());

    return router;
};

module.exports = routers;

