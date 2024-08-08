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
export declare function createServiceContainer(): {
    register: <T>(name: string, service: T) => void;
    resolve: <T_1>(name: string) => T_1;
    hasService: (name: string) => boolean;
};
