/**
 * 动态配置管理器，用于管理和应用动态加载的配置。
 *
 * @template T - 配置的类型。
 * @param {() => Promise<T>} fetchConfig - 异步获取配置的函数。
 * @param {number} [refreshInterval] - 自动刷新配置的时间间隔（毫秒），可选。
 * @returns {{
*   getConfig: () => T | undefined,
*   reload: () => Promise<void>,
*   onUpdate: (callback: (config: T) => void) => void
* }} - 包含获取当前配置、重新加载配置和注册配置更新回调的方法。
*
* @example
* const configManager = createConfigManager(() => fetch('/api/config').then(res => res.json()), 60000);
* configManager.onUpdate((config) => console.log('Config updated:', config));
* configManager.reload(); // 手动触发配置加载
*/
export function createConfigManager<T>(
   fetchConfig: () => Promise<T>,
   refreshInterval?: number
) {
   let currentConfig: T | undefined;
   const listeners: Array<(config: T) => void> = [];

   async function reload(): Promise<void> {
       currentConfig = await fetchConfig();
       listeners.forEach(listener => listener(currentConfig!));
   }

   function getConfig(): T | undefined {
       return currentConfig;
   }

   function onUpdate(callback: (config: T) => void): void {
       listeners.push(callback);
   }

   if (refreshInterval) {
       setInterval(reload, refreshInterval);
   }

   return {
       getConfig,
       reload,
       onUpdate,
   };
}
