"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServiceContainer = void 0;
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
function createServiceContainer() {
    var services = new Map();
    function register(name, service) {
        services.set(name, service);
    }
    function resolve(name) {
        if (!services.has(name)) {
            throw new Error("Service '".concat(name, "' not registered"));
        }
        return services.get(name);
    }
    function hasService(name) {
        return services.has(name);
    }
    return {
        register: register,
        resolve: resolve,
        hasService: hasService,
    };
}
exports.createServiceContainer = createServiceContainer;
