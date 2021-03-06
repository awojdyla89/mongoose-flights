const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    addToTicket
}

function addToTicket(req, res){
    
    Flight.findById(req.params.id, function(err, flightDoc){
        
        flightDoc.tickets.push(req.body.ticketId);
        flightDoc.save(function(err){
            res.redirect(`/flights/${flightDoc._id}`)
            
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