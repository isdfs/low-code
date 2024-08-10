/**
 * 文件哈希工具模块，支持计算文件的MD5、SHA-1、SHA-256等哈希值。
 */
/// <reference types="node" />
export declare class FileHasher {
    /**
     * 计算文件的MD5哈希值。
     * @param data 文件的二进制数据。
     * @returns 返回文件的MD5哈希值。
     */
    static md5(data: Buffer): string;
    /**
     * 计算文件的SHA-1哈希值。
     * @param data 文件的二进制数据。
     * @returns 返回文件的SHA-1哈希值。
     */
    static sha1(data: Buffer): string;
    /**
     * 计算文件的SHA-256哈希值。
     * @param data 文件的二进制数据。
     * @returns 返回文件的SHA-256哈希值。
     */
    static sha256(data: Buffer): string;
    /**
     * 校验文件的哈希值是否匹配。
     * @param data 文件的二进制数据。
     * @param expectedHash 预期的哈希值。
     * @param algorithm 使用的哈希算法，默认为SHA-256。
     * @returns 返回布尔值，表示文件哈希是否匹配。
     */
    static verifyHash(data: Buffer, expectedHash: string, algorithm?: 'md5' | 'sha1' | 'sha256'): boolean;
}
/**
 * 使用示例：
 * ```typescript
 * import * as fs from 'fs';
 *
 * const fileData = fs.readFileSync('path/to/file');
 * const fileHash = FileHasher.sha256(fileData);
 * console.log(`文件的SHA-256哈希值: ${fileHash}`);
 *
 * const isValid = FileHasher.verifyHash(fileData, fileHash);
 * console.log(`哈希值是否匹配: ${isValid}`);
 * ```
 */
