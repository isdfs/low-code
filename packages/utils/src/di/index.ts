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
export { dependencyInjector } from './dependencyInjector';

/**
 * 服务容器，用于注册和解析应用程序中的服务实例。
 *
 * @returns {{
 *   register: <T>(name: string, service: T) => void,
 *   resolve: <T>(name: string) => T,
 *   hasService: (name: string) => boolean
 * }} - 包含注册、解析和检查服务的方法。
 *
 * @example
 * const container = createServiceContainer();
 * container.register('logger', new Logger());
 * const logger = container.resolve<Logger>('logger');
 * logger.log('Service resolved');
 */
export { createServiceContainer } from './serviceContainer';