const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addToFlight
}

function addToFlight(req, res){
    console.log("TICKETS CONTROLLER CALLED")
    Flight.findById(req.params.id, function(err, flight){
        Ticket.find({flight: flight._id}, function(err,ticketsDoc){
            ticketsDoc.flight.push(req.body.ticketId);
            ticketsDoc.save(function(err){

                res.redirect(`/flights/${ticketsDoc._id}`);
            })
        })
    })
}

function create(req, res){
    Ticket.create(req.body, function(err, ticketDoc){
        res.redirect('/tickets/new');
        console.log("NEW TICKET: ", ticketDoc)
    })
}

function newTicket(req, res){
    Ticket.find({}, function(err, ticketsDoc){
        res.render('tickets/new', {
            title: 'Add Ticket',
            ticketsDoc
        });
    })
}