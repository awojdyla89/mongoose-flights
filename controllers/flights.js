const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create
}

function create(req, res){
    
    if(req.body.departs == ''){
        let newDate =  new Date();
        let year = newDate.setFullYear(newDate.getFullYear() + 1);
        req.body.departs =  year
    }
    
     Flight.create(req.body, function(err, flightDocument){
         if(err) {
             console.log(err);
         return res.render('flights/new')
         }
         console.log(flightDocument, " < THis is document we created");
         res.redirect('/flights')
     });
    
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