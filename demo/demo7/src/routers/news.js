const express = require('express');
const router = express.Router();
const { homepage } = require('../controllers/HomeController');

router.route('/').get(homepage);

module.exports = router;
