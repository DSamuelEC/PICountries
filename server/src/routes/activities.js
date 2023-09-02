const routerActivities = require('express').Router();
const getActivities = require('../controllers/getActivities');
const postActivities = require('../controllers/postActivities');

routerActivities.post('/', postActivities);
routerActivities.get('/', getActivities);

module.exports = routerActivities;