/**
 * 高级日志记录模块，支持动态调整日志级别和远程存储。
 * @module Logger
 */

export enum LogLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

class Logger {
  private logLevel: LogLevel;
  private remoteLoggingUrl: string | null;

  constructor(logLevel: LogLevel = LogLevel.INFO, remoteLoggingUrl: string | null = null) {
      this.logLevel = logLevel;
      this.remoteLoggingUrl = remoteLoggingUrl;
  }

  private shouldLog(level: LogLevel): boolean {
      const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR];
      return levels.indexOf(level) >= levels.indexOf(this.logLevel);
  }

  log(level: LogLevel, message: string, data?: any): void {
      if (!this.shouldLog(level)) return;

      const logMessage = `[${level}] ${message}`;
      if (data) {
          console.log(logMessage, data);
      } else {
          console.log(logMessage);
      }

      if (this.remoteLoggingUrl) {
          this.sendLogToServer(level, message, data);
      }
  }

  private async sendLogToServer(level: LogLevel, message: string, data?: any): Promise<void> {
      const logData = { level, message, data, timestamp: new Date().toISOString() };
      try {
          await fetch(this.remoteLoggingUrl!, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(logData),
          });
      } catch (error) {
          console.error('Failed to send log to server:', error);
      }
  }

  setLogLevel(level: LogLevel): void {
      this.logLevel = level;
  }

  setRemoteLoggingUrl(url: string): void {
      this.remoteLoggingUrl = url;
  }
}

const logger = new Logger();
export default logger;
