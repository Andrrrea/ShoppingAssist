const moment = require('moment');

//create a middleware function
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.hostname}${req.originalUrl}: ${moment().format()}`);
    next();
}

logger.exports = logger;