import winston from "winston";

let transports = [
  new winston.transports.File({
    filename: "error.log",
    level: "error",
    // This particular transport handles error logs from the logger
  }),
  new winston.transports.File({
    filename: "combined.log",
    level: "verbose",
    // This particular logger handles logs from the verbose level and above gotten from the logger.
  }),
];

if (process.env.NODE_ENV !== "production") {
  transports.push(new winston.transports.Console());
}

const logger = winston.createLogger({
  level: "info", // Type of log the logger can send(remember from the documentation)
  format: winston.format.json(),
  transports, // - These are simple just transports that will handle the logs from this logger
});


export default logger;
