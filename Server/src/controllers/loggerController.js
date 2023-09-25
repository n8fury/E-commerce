const { createLogger, format, transports } = require('winston');

// Custom function to format the timestamp in 12-hour format with AM/PM
const formatTime12Hour = () => {
	const options = {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hour12: true, // Display in 12-hour format with AM/PM
	};

	return new Date().toLocaleTimeString(undefined, options);
};

const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.json(),
		format.timestamp({
			format: formatTime12Hour,
		})
	),
	transports: [
		new transports.File({
			filename: 'src/logs/info.log',
			level: 'info',
			maxsize: 5 * 1024 * 1024, //5 Mb max file size
			maxFiles: 5,
		}),
		new transports.File({
			filename: 'src/logs/error.log',
			level: 'error',
			maxsize: 5 * 1024 * 1024, //5 Mb max file size
			maxFiles: 5,
		}),
		// new transports.Console({
		// 	format: format.combine(format.colorize(), format.simple()),
		// }),
	],
});

module.exports = { logger };
