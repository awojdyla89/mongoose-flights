const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    index,
    create,
    show
}

function show(req, res){
    // Flight.findById(req.params.id, function(err, flight){
    //     console.log(flight);
    //     res.render('flights/show', {title: 'Flight Detail', flight})
    // })
     Flight.findById(req.params.id)
     .populate('tickets').exec(function(err, flightDoc){
         console.log(flightDoc, "in the SHOWW ROUTE");
         
         Ticket.find(
             {_id: {$nin: flightDoc.tickets}},
             function(err, ticketsDoc){
                res.render('flights/show', {title: 'Flight Detail', flight: flightDoc, tickets: ticketsDoc});
             }
         )
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
         console.log("NEW FLIGHT in controllers-----", flightDocument);
         res.redirect(`/flights/${flightDocument._id}`)
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

