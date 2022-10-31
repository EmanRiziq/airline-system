'use strict';
const { createLogger, format, transports } = require('winston')

const logger = createLogger({
    transports: [
        new transports.Console()
    ]
})

module.exports = logger;