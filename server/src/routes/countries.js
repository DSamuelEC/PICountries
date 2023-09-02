const routerCountries = require('express').Router();
const countriesGet = require('../controllers/getCountries.js');
const getCountryById = require('../controllers/getCountriesById.js');

routerCountries.get('/', countriesGet);
routerCountries.get('/:id', getCountryById);

module.exports = routerCountries;