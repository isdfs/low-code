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
export declare function virtualFileSystem(): {
    createFile: (path: string, content: string) => void;
    readFile: (path: string) => string | undefined;
    deleteFile: (path: string) => void;
    listFiles: () => string[];
};
