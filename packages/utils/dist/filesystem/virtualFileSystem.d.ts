/**
 * 虚拟文件系统模块，用于在内存中模拟文件操作。
 */
export declare class VirtualFileSystem {
    private files;
    /**
     * 创建新文件。
     * @param name 文件名。
     * @param content 文件内容。
     */
    createFile(name: string, content: string): void;
    /**
     * 读取文件内容。
     * @param name 文件名。
     * @returns 文件的内容。
     */
    readFile(name: string): string;
    /**
     * 更新文件内容。
     * @param name 文件名。
     * @param content 新的文件内容。
     */
    updateFile(name: string, content: string): void;
    /**
     * 删除文件。
     * @param name 文件名。
     */
    deleteFile(name: string): void;
    /**
     * 列出所有文件。
     * @returns 文件名的数组。
     */
    listFiles(): string[];
}
