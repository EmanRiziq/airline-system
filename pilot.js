"use strict";
require("./manager");
const events = require("./events");
setTimeout(function () {
    events.on("new-flight", handleTookoff);
}, 3000);
// function delay(time) {
//   return new Promise(resolve => setTimeout(resolve, time));
// }
// delay(3000).then(() => {events.on("new-flight", handleTookoff);} );
function handleTookoff(flight) {
    flight.event = "took_off";
    //   flight.time=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(`Pilot: flight with ID ${flight.Details.flightID} took-off`);
    console.log(flight);
}

////////////////arrive/////////////////////////////
setTimeout(function () {
    events.on("new-flight", handleArrive);
}, 4000);

function handleArrive(flight) {
    flight.event = "arrived";
    //   flight.time=new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    console.log(`Pilot: flight with ID ${flight.Details.flightID} has arrived`);
    console.log(flight);
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pioletName}    `);
}