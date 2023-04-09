import winston, { format, createLogger, transports } from 'winston';

const { combine, timestamp, printf } = format;

const customFormat = printf(info => {
  const { level, message, timestamp } = info;
  const stringifiedMessage: string =
    typeof message === 'object' ? JSON.stringify(message) : message;
  const label = info[Symbol.for('splat')][0];
  const stringifiedLabel: string = typeof label === 'object' ? JSON.stringify(label) : label;

  return `${new Date(timestamp).toISOString()} [${
    stringifiedLabel || 'App'
  }] ${level}: ${stringifiedMessage}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    customFormat,
    format.colorize({ colors: { info: 'green', error: 'red', warn: 'yellow' }, all: true }),
  ),
  transports: [new transports.Console()],
});

class BaseLogger {
  logger: winston.Logger;
  constructor() {
    this.logger = logger;
  }

  log(message: unknown, label?: unknown) {
    const { stringifiedMessage, stringifiedLabel } = this.parseinput(message, label);

    logger.log('info', stringifiedMessage, stringifiedLabel);
  }

  error(message: unknown, label?: unknown) {
    const a = 'sadas';

    a;
    const { stringifiedMessage, stringifiedLabel } = this.parseinput(message, label);

    logger.error(stringifiedMessage, stringifiedLabel);
  }

  warn(message: unknown, label?: unknown) {
    const { stringifiedMessage, stringifiedLabel } = this.parseinput(message, label);

    logger.warn(stringifiedMessage, stringifiedLabel);
  }

  private parseinput(message: unknown, label?: unknown) {
    return {
      stringifiedMessage:
        typeof message === 'object' ? JSON.stringify(message, undefined, 2) : <string>message,
      stringifiedLabel: typeof label === 'object' ? JSON.stringify(label) : <string>(label || ''),
    };
  }
}
export const Logger = new BaseLogger();
