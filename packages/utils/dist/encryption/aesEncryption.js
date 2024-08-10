"use strict";
/**
 * AES加密模块，实现了对称加密的加密和解密功能。
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AESEncryption = void 0;
var crypto = __importStar(require("crypto"));
var AESEncryption = /** @class */ (function () {
    /**
     * 创建一个AES加密实例。
     * @param key 密钥，长度为16、24或32字节。
     * @param iv 初始化向量，长度为16字节。
     */
    function AESEncryption(key, iv) {
        this.key = Buffer.from(key, 'hex');
        this.iv = Buffer.from(iv, 'hex');
    }
    /**
     * 加密数据。
     * @param data 要加密的明文数据。
     * @returns 加密后的密文数据（Base64编码）。
     */
    AESEncryption.prototype.encrypt = function (data) {
        var cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);
        var encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    };
    /**
     * 解密数据。
     * @param encryptedData 要解密的密文数据（Base64编码）。
     * @returns 解密后的明文数据。
     */
    AESEncryption.prototype.decrypt = function (encryptedData) {
        var decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);
        var decrypted = decipher.update(encryptedData, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    };
    return AESEncryption;
}());
exports.AESEncryption = AESEncryption;
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
