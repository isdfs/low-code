/**
 * AES加密模块，实现了对称加密的加密和解密功能。
 */

import * as crypto from 'crypto';

export class AESEncryption {
  private key: Buffer;
  private iv: Buffer;

  /**
   * 创建一个AES加密实例。
   * @param key 密钥，长度为16、24或32字节。
   * @param iv 初始化向量，长度为16字节。
   */
  constructor(key: string, iv: string) {
    this.key = Buffer.from(key, 'hex');
    this.iv = Buffer.from(iv, 'hex');
  }

  /**
   * 加密数据。
   * @param data 要加密的明文数据。
   * @returns 加密后的密文数据（Base64编码）。
   */
  encrypt(data: string): string {
    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
  }

  /**
   * 解密数据。
   * @param encryptedData 要解密的密文数据（Base64编码）。
   * @returns 解密后的明文数据。
   */
  decrypt(encryptedData: string): string {
    const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);
    let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}

/**
 * 使用示例：
 * ```typescript
 * const key = '6368616e676520746869732070617373'; // 32字节密钥（16进制表示）
 * const iv = '1234567890abcdef1234567890abcdef'; // 16字节IV（16进制表示）
 * 
 * const aes = new AESEncryption(key, iv);
 * const plaintext = 'Hello, World!';
 * 
 * const encrypted = aes.encrypt(plaintext);
 * console.log(`加密后的密文: ${encrypted}`);
 * 
 * const decrypted = aes.decrypt(encrypted);
 * console.log(`解密后的明文: ${decrypted}`);
 * ```
 */
