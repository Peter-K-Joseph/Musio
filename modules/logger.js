const {createLogger, format, transports} = require("winston");
const {combine, timestamp, printf} = format; 

var logger = createLogger({
	format: combine(
		timestamp(),
		printf(({level, message, timestamp}) => {  
			return `${timestamp} [${level}]: ${message}`;
		})
	),
	transports: [new transports.Console(), new transports.File({ filename: 'system.log' })],
});

module.exports = logger;