/**
 * @module StringCompression
 * @description 提供字符串的压缩与解压缩功能，适用于在传输或存储大量文本数据时节省空间。
 */

import { deflate, inflate } from 'pako';

export class StringCompression {

    /**
     * @description 使用 Deflate 算法压缩字符串
     * @param input 要压缩的字符串
     * @returns 压缩后的二进制数据，使用 Base64 编码
     * @example
     * ```typescript
     * const compressed = StringCompression.compress('Hello, world!');
     * console.log(compressed); // 输出压缩后的 Base64 字符串
     * ```
     */
    static compress(input: string): string {
        const compressedData = (deflate as any)(input, { to: 'string' });
        return btoa(compressedData);
    }

    /**
     * @description 解压缩使用 Deflate 算法压缩的字符串
     * @param compressedInput 压缩后的 Base64 字符串
     * @returns 解压后的原始字符串
     * @example
     * ```typescript
     * const decompressed = StringCompression.decompress(compressed);
     * console.log(decompressed); // 输出 "Hello, world!"
     * ```
     */
    static decompress(compressedInput: string): string {
        const compressedData = atob(compressedInput);
        const decompressedData = inflate((compressedData as any), { to: 'string' });
        return decompressedData;
    }
}


// 示例用法
/*
const compressed = StringCompression.compress('Hello, world!');
console.log('Compressed:', compressed); // 输出压缩后的 Base64 字符串

const decompressed = StringCompression.decompress(compressed);
console.log('Decompressed:', decompressed); // 输出 "Hello, world!"
*/
