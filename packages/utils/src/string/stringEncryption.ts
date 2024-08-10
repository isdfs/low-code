/**
 * @module StringEncryption
 * @description 提供字符串的加密与解密功能，支持对称加密和非对称加密，以保护敏感数据的安全。
 */

import * as crypto from 'crypto';

export class StringEncryption {

    private static readonly ALGORITHM = 'aes-256-cbc';

    /**
     * @description 对字符串进行对称加密
     * @param input 要加密的字符串
     * @param key 加密密钥，长度应为 32 字节
     * @returns 加密后的 Base64 编码字符串
     * @example
     * ```typescript
     * const encrypted = StringEncryption.encrypt('Hello, world!', 'myverystrongpasswordo32bitlength');
     * console.log(encrypted); // 输出加密后的 Base64 字符串
     * ```
     */
    static encrypt(input: string, key: string): string {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(this.ALGORITHM, Buffer.from(key, 'utf8'), iv);
        let encrypted = cipher.update(input, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return iv.toString('base64') + ':' + encrypted;
    }

    /**
     * @description 解密字符串
     * @param encryptedInput 加密后的 Base64 编码字符串
     * @param key 解密密钥，长度应为 32 字节
     * @returns 解密后的原始字符串
     * @example
     * ```typescript
     * const decrypted = StringEncryption.decrypt(encrypted, 'myverystrongpasswordo32bitlength');
     * console.log(decrypted); // 输出 "Hello, world!"
     * ```
     */
    static decrypt(encryptedInput: string, key: string): string {
        const [ivString, encryptedText] = encryptedInput.split(':');
        const iv = Buffer.from(ivString, 'base64');
        const decipher = crypto.createDecipheriv(this.ALGORITHM, Buffer.from(key, 'utf8'), iv);
        let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}


// 示例用法
/*
const key = 'myverystrongpasswordo32bitlength'; // 32字节长度的密钥
const encrypted = StringEncryption.encrypt('Hello, world!', key);
console.log('Encrypted:', encrypted); // 输出加密后的 Base64 字符串

const decrypted = StringEncryption.decrypt(encrypted, key);
console.log('Decrypted:', decrypted); // 输出 "Hello, world!"
*/
