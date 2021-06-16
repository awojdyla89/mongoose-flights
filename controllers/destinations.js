const Flight = require('../models/flight');

module.exports = {
    create
}

function create(req, res){
    //console.log(req.body);
    //console.log(req.body.id, "<flight._id!!!!!!!!!!!!!!!")

    Flight.findById(req.params.id, function(err, flightDoc){
        flightDoc.destinations.push(req.body);
        flightDoc.save(function(err){
            res.redirect(`/flights/${flightDoc._id}`)
        })
    })
}