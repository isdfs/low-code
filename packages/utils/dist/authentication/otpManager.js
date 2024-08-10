"use strict";
/**
 * OTP管理器模块，支持生成基于时间（TOTP）和计数器（HOTP）的OTP。
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
exports.OTPManager = void 0;
var crypto = __importStar(require("crypto"));
var OTPManager = /** @class */ (function () {
    function OTPManager() {
    }
    /**
     * 生成一个随机的Base32密钥。
     * @param length 密钥长度，默认为32。
     * @returns 生成的Base32密钥。
     */
    OTPManager.generateBase32Secret = function (length) {
        if (length === void 0) { length = 32; }
        var secret = '';
        for (var i = 0; i < length; i++) {
            secret += this.base32Chars.charAt(Math.floor(Math.random() * this.base32Chars.length));
        }
        return secret;
    };
    /**
     * 生成基于计数器的一次性密码（HOTP）。
     * @param secret Base32编码的密钥。
     * @param counter 计数器值。
     * @param digits OTP的位数，默认为6。
     * @returns 生成的HOTP。
     */
    OTPManager.generateHOTP = function (secret, counter, digits) {
        if (digits === void 0) { digits = 6; }
        var key = this.base32ToHex(secret);
        var counterHex = this.leftPad(counter.toString(16), 16, '0');
        var hmac = crypto.createHmac('sha1', Buffer.from(key, 'hex')).update(Buffer.from(counterHex, 'hex')).digest('hex');
        var offset = parseInt(hmac.slice(-1), 16);
        var code = (parseInt(hmac.substr(offset * 2, 8), 16) & 0x7fffffff) % Math.pow(10, digits);
        return this.leftPad(code.toString(), digits, '0');
    };
    /**
     * 生成基于时间的一次性密码（TOTP）。
     * @param secret Base32编码的密钥。
     * @param timeStep 时间步长（秒），默认为30秒。
     * @param digits OTP的位数，默认为6。
     * @returns 生成的TOTP。
     */
    OTPManager.generateTOTP = function (secret, timeStep, digits) {
        if (timeStep === void 0) { timeStep = 30; }
        if (digits === void 0) { digits = 6; }
        var time = Math.floor(Date.now() / 1000 / timeStep);
        return this.generateHOTP(secret, time, digits);
    };
    /**
     * 验证基于时间的一次性密码（TOTP）。
     * @param token 要验证的TOTP。
     * @param secret Base32编码的密钥。
     * @param timeStep 时间步长（秒），默认为30秒。
     * @param window 验证窗口，默认为1，表示允许当前时间步长的前后各一格。
     * @returns 如果验证通过，返回true；否则返回false。
     */
    OTPManager.verifyTOTP = function (token, secret, timeStep, window) {
        if (timeStep === void 0) { timeStep = 30; }
        if (window === void 0) { window = 1; }
        var currentTime = Math.floor(Date.now() / 1000 / timeStep);
        for (var errorWindow = -window; errorWindow <= window; errorWindow++) {
            var generatedToken = this.generateHOTP(secret, currentTime + errorWindow, token.length);
            if (generatedToken === token) {
                return true;
            }
        }
        return false;
    };
    /**
     * 将Base32编码的字符串转换为十六进制字符串。
     * @param base32 Base32编码的字符串。
     * @returns 转换后的十六进制字符串。
     * @private
     */
    OTPManager.base32ToHex = function (base32) {
        var bits = '';
        for (var i = 0; i < base32.length; i++) {
            var val = this.base32Chars.indexOf(base32.charAt(i).toUpperCase());
            bits += this.leftPad(val.toString(2), 5, '0');
        }
        var hex = '';
        for (var i = 0; i + 4 <= bits.length; i += 4) {
            var chunk = bits.substr(i, 4);
            hex += parseInt(chunk, 2).toString(16);
        }
        return hex;
    };
    /**
     * 左填充字符串。
     * @param str 要填充的字符串。
     * @param length 填充后的总长度。
     * @param padChar 用于填充的字符。
     * @returns 填充后的字符串。
     * @private
     */
    OTPManager.leftPad = function (str, length, padChar) {
        return str.length >= length ? str : new Array(length - str.length + 1).join(padChar) + str;
    };
    OTPManager.base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    return OTPManager;
}());
exports.OTPManager = OTPManager;
/**
 * 使用示例：
 * ```typescript
 * const secret = OTPManager.generateBase32Secret();
 * console.log(`生成的Base32密钥: ${secret}`);
 *
 * const hotp = OTPManager.generateHOTP(secret, 1);
 * console.log(`生成的HOTP: ${hotp}`);
 *
 * const totp = OTPManager.generateTOTP(secret);
 * console.log(`生成的TOTP: ${totp}`);
 *
 * const isValid = OTPManager.verifyTOTP(totp, secret);
 * console.log(`TOTP是否有效: ${isValid}`);
 * ```
 */
