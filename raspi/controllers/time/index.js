const { Router: router } = require('express');
const set = require('./set');
const unset = require('./unset');
/**
 * Provide Api for Time Light control

 Light on  POST /api/v1/time/set
 @params

 Light off  POST /api/v1/time/unset
 @params

*/


// eslint-disable-next-line no-unused-vars
module.exports = () => {
    const api = router();
    api.post('/set', set);
    api.post('/unset', unset);

    return api;
};
