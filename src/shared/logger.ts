import winston, { format, createLogger, transports, addColors } from 'winston';

const { combine, timestamp, printf } = format;

addColors({ data: 'bold' });
addColors({ label: 'bold yellow' });
addColors({ date: 'gray' });
addColors({ level: 'bold' });

const colorizer = format.colorize();
const customFormat = printf(info => {
  const { level, message, timestamp } = info;
  const isObject = typeof message === 'object';
  const stringifiedMessage: string = isObject ? JSON.stringify(message, undefined, 2) : message;
  const label = info[Symbol.for('splat')][0];
  const stringifiedLabel: string = typeof label === 'object' ? JSON.stringify(label) : label;

  return `${colorizer.colorize('date', new Date(timestamp).toISOString())}   ${colorizer.colorize(
    'level',
    pad(level.toUpperCase() + ':', 7),
  )} ${colorizer.colorize('label', `[${stringifiedLabel || 'App'}]`)}  ${
    isObject ? 'Object: \n' : ''
  }${colorizer.colorize('data', stringifiedMessage)}`;
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
    logger.log('info', message as string, label);
  }

  error(message: unknown, label?: unknown) {
    logger.error(message as string, label);
  }

  warn(message: unknown, label?: unknown) {
    logger.warn(message as string, label);
  }
}
export const Logger = new BaseLogger();

const pad = (str: string, length: number) => {
  while (str.length < length) {
    str += ' ';
  }

  return str;
};
