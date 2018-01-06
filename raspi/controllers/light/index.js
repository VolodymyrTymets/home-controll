const { Router: router } = require('express');
const on = require('./on');
const off = require('./off');
/**
 * Provide Api for Light control

 Light on  POST /api/v1/light/on
 @params

 Light off  POST /api/v1/light/off
 @params

*/


// eslint-disable-next-line no-unused-vars
module.exports = () => {
    const api = router();
    api.post('/on', on);
    api.post('/off', off);

    return api;
};
