'use strict';
require("./manager");
require("./pilot")
const events = require("./events");
const logger = require('./logger')

events.on("new-flight", handleNewFlight);
function handleNewFlight(flight) {
    // logger.info(`Manager: new flight with ID ${flight.Details.flightID} have been scheduled`)
    // console.log(`Manager: new flight with ID ${flight.Details.flightID} have been scheduled`)
    console.log(flight);
}


module.exports = events;