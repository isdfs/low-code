/**
 * 依赖注入器，用于管理和注入依赖项。
 *
 * @template T - 依赖项的类型映射。
 * @returns {{
*   provide: <K extends keyof T>(key: K, value: T[K]) => void,
*   resolve: <K extends keyof T>(key: K) => T[K],
*   inject: <K extends keyof T>(key: K) => T[K]
* }} - 包含提供、解析和注入依赖项的方法。
*
* @example
* const di = dependencyInjector<{ db: Database, logger: Logger }>();
* di.provide('db', new Database());
* di.provide('logger', new Logger());
* const db = di.inject('db');
* const logger = di.inject('logger');
*/
export declare function dependencyInjector<T extends Record<string, any>>(): {
    provide: <K extends keyof T>(key: K, value: T[K]) => void;
    resolve: <K_1 extends keyof T>(key: K_1) => T[K_1];
    inject: <K_2 extends keyof T>(key: K_2) => T[K_2];
};
