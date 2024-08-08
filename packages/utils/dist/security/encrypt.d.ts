/**
 * 简单的加密函数（Caesar Cipher）
 *
 * @param {string} text - 要加密的文本
 * @param {number} shift - 位移量
 * @returns {string} 加密后的文本
 *
 * @example
 * const encrypted = encrypt('hello', 3); // khoor
 */
export declare function encrypt(text: string, shift: number): string;
/**
* 简单的解密函数（Caesar Cipher）
*
* @param {string} text - 要解密的文本
* @param {number} shift - 位移量
* @returns {string} 解密后的文本
*
* @example
* const decrypted = decrypt('khoor', 3); // hello
*/
export declare function decrypt(text: string, shift: number): string;
