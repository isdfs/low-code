"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.virtualFileSystem = void 0;
/**
 * 虚拟文件系统，用于在内存中模拟文件操作。
 *
 * @returns {{
*   createFile: (path: string, content: string) => void,
*   readFile: (path: string) => string | undefined,
*   deleteFile: (path: string) => void,
*   listFiles: () => string[]
* }} - 包含创建、读取、删除和列出文件的方法。
*
* @example
* const vfs = virtualFileSystem();
* vfs.createFile('/path/to/file.txt', 'Hello, World!');
* console.log(vfs.readFile('/path/to/file.txt')); // 'Hello, World!'
* vfs.deleteFile('/path/to/file.txt');
*/
function virtualFileSystem() {
    var files = new Map();
    function createFile(path, content) {
        files.set(path, content);
    }
    function readFile(path) {
        return files.get(path);
    }
    function deleteFile(path) {
        files.delete(path);
    }
    function listFiles() {
        return Array.from(files.keys());
    }
    return {
        createFile: createFile,
        readFile: readFile,
        deleteFile: deleteFile,
        listFiles: listFiles,
    };
}
exports.virtualFileSystem = virtualFileSystem;
