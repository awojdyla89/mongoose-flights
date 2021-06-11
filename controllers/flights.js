const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res){
    res.render('flights/index');
}