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
export { crossPlatformStorage } from './crossPlatformStorage';