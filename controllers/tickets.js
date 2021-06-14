const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket
}

function newTicket(req, res){
    Ticket.find({}, function(err, ticketsDoc){
        res.render('tickets/new', {
            title: 'Add Ticket',
            ticketsDoc
        })
    })
}