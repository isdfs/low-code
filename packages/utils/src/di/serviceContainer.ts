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
export function createServiceContainer() {
   const services = new Map<string, any>();

   function register<T>(name: string, service: T) {
       services.set(name, service);
   }

   function resolve<T>(name: string): T {
       if (!services.has(name)) {
           throw new Error(`Service '${name}' not registered`);
       }
       return services.get(name);
   }

   function hasService(name: string): boolean {
       return services.has(name);
   }

   return {
       register,
       resolve,
       hasService,
   };
}
