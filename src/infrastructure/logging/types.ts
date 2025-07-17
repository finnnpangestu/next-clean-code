export interface ILogger {
  info(message: string, ...meta: []): void;
  warn(message: string, ...meta: []): void;
  error(message: string, ...meta: []): void;
}