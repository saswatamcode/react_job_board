import { createLogger, format, transports } from "winston";

const myFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${level}:[${timestamp}] ${label ? label : ""} ${message}`;
});

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.combine(format.colorize(), format.simple()),
    myFormat
  ),
  defaultMeta: { service: "positively-auth-service" },
  transports: [new transports.Console()],
});

export default logger;
