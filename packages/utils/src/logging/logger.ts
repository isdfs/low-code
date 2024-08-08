/**
 * 日志记录器，用于记录和管理应用程序中的日志信息。
 *
 * @param {string} context - 日志记录器的上下文名称。
 * @returns {{
*   info: (message: string, ...data: any[]) => void,
*   warn: (message: string, ...data: any[]) => void,
*   error: (message: string, ...data: any[]) => void,
*   setLevel: (level: 'info' | 'warn' | 'error') => void
* }} - 包含记录信息、警告和错误日志的方法，以及设置日志级别的方法。
*
* @example
* const logger = createLogger('MyApp');
* logger.info('This is an info message');
* logger.warn('This is a warning message');
* logger.error('This is an error message');
* logger.setLevel('warn');
*/
export function createLogger(context: string) {
   let level: 'info' | 'warn' | 'error' = 'info';

   function log(levelName: string, message: string, ...data: any[]) {
       (console as any)[levelName](`[${context}] ${message}`, ...data);
   }

   function info(message: string, ...data: any[]) {
       if (['info'].includes(level)) log('info', message, ...data);
   }

   function warn(message: string, ...data: any[]) {
       if (['info', 'warn'].includes(level)) log('warn', message, ...data);
   }

   function error(message: string, ...data: any[]) {
       if (['info', 'warn', 'error'].includes(level)) log('error', message, ...data);
   }

   function setLevel(newLevel: 'info' | 'warn' | 'error') {
       level = newLevel;
   }

   return {
       info,
       warn,
       error,
       setLevel,
   };
}
