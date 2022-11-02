'use strict';

require('dotenv').config();
const io = require('socket.io-client');
let PORT = process.env.PORT
let host = `http://localhost:${PORT}/`;


const { faker } = require('@faker-js/faker');

const managerConnection = io.connect(host);

console.log(`manager listing on port ${PORT}`);

setInterval(() => {
    let flight =
    {
        events: "new-flight",
        time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        Details: {
            airLine: 'Qatar Airlines',
            flightID: faker.datatype.uuid(),
            pioletName: faker.name.fullName(),
            destination: faker.address.cityName()
        },
    }
    console.log(`Manager: new flight with ID ${flight.Details.flightID} have been scheduled`);
    console.log(`Manager: we’re greatly thankful for the amazing flight, ${flight.Details.pioletName}`)
    managerConnection.emit("new-flight", flight);

}, 10000)