/**
 * 高级日志记录模块，支持动态调整日志级别和远程存储。
 * @module Logger
 */
export declare enum LogLevel {
    DEBUG = "DEBUG",
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR"
}
declare class Logger {
    private logLevel;
    private remoteLoggingUrl;
    constructor(logLevel?: LogLevel, remoteLoggingUrl?: string | null);
    private shouldLog;
    log(level: LogLevel, message: string, data?: any): void;
    private sendLogToServer;
    setLogLevel(level: LogLevel): void;
    setRemoteLoggingUrl(url: string): void;
}
declare const logger: Logger;
export default logger;
