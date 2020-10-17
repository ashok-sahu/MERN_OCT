const router = require('express').Router();
const apiRoutes = require('./Apis/index');
const keys = require('../configs/keys.config');

const { apiURL } = keys.urls;
const api = `/${apiURL}`;

// api routes
router.use(api, apiRoutes);
router.use(api, (req, res) => res.status(404).json('No API route found'));

module.exports = router;
