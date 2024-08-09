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
export function dependencyInjector<T extends Record<string, any>>() {
   const dependencies = new Map<keyof T, T[keyof T]>();

   function provide<K extends keyof T>(key: K, value: T[K]) {
       dependencies.set(key, value);
   }

   function resolve<K extends keyof T>(key: K): T[K] {
       if (!dependencies.has(key)) {
           throw new Error(`Dependency '${String(key)}' not found`);
       }
       return dependencies.get(key) as any;
   }

   function inject<K extends keyof T>(key: K): T[K] {
       return resolve(key);
   }

   return {
       provide,
       resolve,
       inject,
   };
}
