"use strict";
/**
 * @module StringEncryption
 * @description 提供字符串的加密与解密功能，支持对称加密和非对称加密，以保护敏感数据的安全。
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
exports.StringEncryption = void 0;
var crypto = __importStar(require("crypto"));
var StringEncryption = /** @class */ (function () {
    function StringEncryption() {
    }
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
    StringEncryption.encrypt = function (input, key) {
        var iv = crypto.randomBytes(16);
        var cipher = crypto.createCipheriv(this.ALGORITHM, Buffer.from(key, 'utf8'), iv);
        var encrypted = cipher.update(input, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return iv.toString('base64') + ':' + encrypted;
    };
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
    StringEncryption.decrypt = function (encryptedInput, key) {
        var _a = encryptedInput.split(':'), ivString = _a[0], encryptedText = _a[1];
        var iv = Buffer.from(ivString, 'base64');
        var decipher = crypto.createDecipheriv(this.ALGORITHM, Buffer.from(key, 'utf8'), iv);
        var decrypted = decipher.update(encryptedText, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    };
    StringEncryption.ALGORITHM = 'aes-256-cbc';
    return StringEncryption;
}());
exports.StringEncryption = StringEncryption;
// 示例用法
/*
const key = 'myverystrongpasswordo32bitlength'; // 32字节长度的密钥
const encrypted = StringEncryption.encrypt('Hello, world!', key);
console.log('Encrypted:', encrypted); // 输出加密后的 Base64 字符串

const decrypted = StringEncryption.decrypt(encrypted, key);
console.log('Decrypted:', decrypted); // 输出 "Hello, world!"
*/
