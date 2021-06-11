var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')

router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/', flightsCtrl.index);

module.exports = router;