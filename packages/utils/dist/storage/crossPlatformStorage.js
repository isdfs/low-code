"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crossPlatformStorage = void 0;
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
function crossPlatformStorage(storageType) {
    var storage;
    if (storageType === 'local') {
        storage = localStorage;
    }
    else if (storageType === 'session') {
        storage = sessionStorage;
    }
    else {
        storage = new Map();
    }
    function setItem(key, value) {
        if (storage instanceof Storage) {
            storage.setItem(key, JSON.stringify(value));
        }
        else {
            storage.set(key, value);
        }
    }
    function getItem(key) {
        if (storage instanceof Storage) {
            var item = storage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        }
        else {
            return storage.get(key);
        }
    }
    function removeItem(key) {
        if (storage instanceof Storage) {
            storage.removeItem(key);
        }
        else {
            storage.delete(key);
        }
    }
    function clear() {
        if (storage instanceof Storage) {
            storage.clear();
        }
        else {
            storage.clear();
        }
    }
    return {
        setItem: setItem,
        getItem: getItem,
        removeItem: removeItem,
        clear: clear,
    };
}
exports.crossPlatformStorage = crossPlatformStorage;
