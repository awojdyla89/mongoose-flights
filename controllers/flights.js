const Flight = require('../models/flight');

module.exports = {
    new: newFlight,
    index,
    create,
    show
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        console.log(flight);
        res.render('flights/show', {title: 'Flight Detail', flight})
    })
}

function create(req, res){
    
    if(req.body.departs == ''){
        let newDate =  new Date();
        let updateYear = newDate.setFullYear(newDate.getFullYear() + 1);
        req.body.departs =  updateYear
    }
    
     Flight.create(req.body, function(err, flightDocument){
         if(err) {
             console.log(err);
         return res.render('flights/new')
         }
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