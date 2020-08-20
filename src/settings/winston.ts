import { createLogger, transports, Logger, LoggerOptions, format } from "winston";
import * as kleur from "kleur";

const LOG_LEVEL: string = process.env.LOG_LEVEL || "debug";

function dateFormat(): string {
  return new Date(Date.now()).toUTCString();
}

function colorizeLevel(level: string) {
  switch (level) {
    case "INFO":
      return kleur.bold().green(level);
    case "ERROR":
      return kleur.bold().red(level);
    case "WARN":
      return kleur.bold().yellow(level);
    case "DEBUG":
      return kleur.bold().magenta(level);
  }
}

const linearFormat = format.printf((info) => {
  if (!info.message) throw new Error("Invalid argument. 'message' is missing. ");
  let message = `${dateFormat()} | ${colorizeLevel(info.level.toUpperCase())} | ${info.message} | `;
  message = info.data ? message + kleur.blue(`data:${JSON.stringify(info.data)}`) + " | " : message;
  if (info.error) {
    if (info.error instanceof Error) {
      message = message + kleur.gray(`stack:${JSON.stringify(info.error.stack)}`) + " | ";
    } else {
      message = message + kleur.gray("stack:" + JSON.stringify(info.error)) + " | ";
    }
  }
  return message;
});

const options: LoggerOptions = {
  level: LOG_LEVEL,
  handleExceptions: true,
  defaultMeta: { environment: process.env.NODE_ENV || "development" },
  format: linearFormat
};

const logger: Logger = createLogger({
  transports: []
});

logger.add(new transports.Console(options));

export { logger, Logger };
