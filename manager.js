'use strict'

// Qatar Airlines

const events = require('./events')
const { faker } = require('@faker-js/faker');
faker.locale = 'ar';

setInterval(() => {
    let flight =
    {
        event: "new-flight",
        time: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        Details: {
            airLine: 'Qatar Airlines',
            flightID: faker.datatype.uuid(),
            pioletName: faker.name.fullName(),
            destination: faker.address.cityName()
        },
    }
    events.emit("new-flight", flight)
}, 10000)