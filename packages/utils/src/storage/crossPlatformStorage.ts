/**
 * 跨平台存储工具，自动选择最佳的存储方式（localStorage、sessionStorage、内存存储）。
 *
 * @template T - 存储数据的类型。
 * @param {string} storageType - 存储类型，可选 'local'、'session' 或 'memory'。
 * @returns {{
*   setItem: (key: string, value: T) => void,
*   getItem: (key: string) => T | undefined,
*   removeItem: (key: string) => void,
*   clear: () => void
* }} - 包含设置、获取、删除和清除存储项的方法。
*
* @example
* const storage = crossPlatformStorage<number>('local');
* storage.setItem('key', 42);
* console.log(storage.getItem('key')); // 42
*/
export function crossPlatformStorage<T>(storageType: 'local' | 'session' | 'memory') {
   let storage: Storage | Map<string, T>;

   if (storageType === 'local') {
       storage = localStorage;
   } else if (storageType === 'session') {
       storage = sessionStorage;
   } else {
       storage = new Map<string, T>();
   }

   function setItem(key: string, value: T): void {
       if (storage instanceof Storage) {
           storage.setItem(key, JSON.stringify(value));
       } else {
           (storage as Map<string, T>).set(key, value);
       }
   }

   function getItem(key: string): T | undefined {
       if (storage instanceof Storage) {
           const item = storage.getItem(key);
           return item ? JSON.parse(item) : undefined;
       } else {
           return (storage as Map<string, T>).get(key);
       }
   }

   function removeItem(key: string): void {
       if (storage instanceof Storage) {
           storage.removeItem(key);
       } else {
           (storage as Map<string, T>).delete(key);
       }
   }

   function clear(): void {
       if (storage instanceof Storage) {
           storage.clear();
       } else {
           (storage as Map<string, T>).clear();
       }
   }

   return {
       setItem,
       getItem,
       removeItem,
       clear,
   };
}
