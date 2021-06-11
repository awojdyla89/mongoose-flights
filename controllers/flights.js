const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create
}

function create(req, res){
    
    if(req.body.airline == ''){
        req.body.airline == 'n/a';
    }
    if(req.body.airport.value == ''){
        req.body.airport.cast == 'DEN';
    }
    if(req.body.flightNo < 10 && req.body.flightNo > 9999){
        req.body.flightNo.cast == 'n/a';
    }
    if(req.body.departs == null){
        req.body.departs.cast == 'n/a';
    }
        console.log(req.body.airline);
        console.log(req.body.airport);
        console.log(req.body.flightNo);
        console.log(req.body.departs);
    // Flight.create(req.body, function(err, flightDocument){
    // })
    
    res.redirect('/flights')
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res){
    Flight.find({}, function (err, allFlightDocuments){
        console.log(allFlightDocuments);

        res.render('flights/index', {
            flights: allFlightDocuments
        });
    });
}