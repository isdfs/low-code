"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dependencyInjector = void 0;
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
function dependencyInjector() {
    var dependencies = new Map();
    function provide(key, value) {
        dependencies.set(key, value);
    }
    function resolve(key) {
        if (!dependencies.has(key)) {
            throw new Error("Dependency '".concat(String(key), "' not found"));
        }
        return dependencies.get(key);
    }
    function inject(key) {
        return resolve(key);
    }
    return {
        provide: provide,
        resolve: resolve,
        inject: inject,
    };
}
exports.dependencyInjector = dependencyInjector;
