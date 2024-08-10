/**
 * OTP管理器模块，支持生成基于时间（TOTP）和计数器（HOTP）的OTP。
 */

import * as crypto from 'crypto';

export class OTPManager {
  private static base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

  /**
   * 生成一个随机的Base32密钥。
   * @param length 密钥长度，默认为32。
   * @returns 生成的Base32密钥。
   */
  static generateBase32Secret(length: number = 32): string {
    let secret = '';
    for (let i = 0; i < length; i++) {
      secret += this.base32Chars.charAt(Math.floor(Math.random() * this.base32Chars.length));
    }
    return secret;
  }

  /**
   * 生成基于计数器的一次性密码（HOTP）。
   * @param secret Base32编码的密钥。
   * @param counter 计数器值。
   * @param digits OTP的位数，默认为6。
   * @returns 生成的HOTP。
   */
  static generateHOTP(secret: string, counter: number, digits: number = 6): string {
    const key = this.base32ToHex(secret);
    const counterHex = this.leftPad(counter.toString(16), 16, '0');
    const hmac = crypto.createHmac('sha1', Buffer.from(key, 'hex')).update(Buffer.from(counterHex, 'hex')).digest('hex');
    const offset = parseInt(hmac.slice(-1), 16);
    const code = (parseInt(hmac.substr(offset * 2, 8), 16) & 0x7fffffff) % Math.pow(10, digits);
    return this.leftPad(code.toString(), digits, '0');
  }

  /**
   * 生成基于时间的一次性密码（TOTP）。
   * @param secret Base32编码的密钥。
   * @param timeStep 时间步长（秒），默认为30秒。
   * @param digits OTP的位数，默认为6。
   * @returns 生成的TOTP。
   */
  static generateTOTP(secret: string, timeStep: number = 30, digits: number = 6): string {
    const time = Math.floor(Date.now() / 1000 / timeStep);
    return this.generateHOTP(secret, time, digits);
  }

  /**
   * 验证基于时间的一次性密码（TOTP）。
   * @param token 要验证的TOTP。
   * @param secret Base32编码的密钥。
   * @param timeStep 时间步长（秒），默认为30秒。
   * @param window 验证窗口，默认为1，表示允许当前时间步长的前后各一格。
   * @returns 如果验证通过，返回true；否则返回false。
   */
  static verifyTOTP(token: string, secret: string, timeStep: number = 30, window: number = 1): boolean {
    const currentTime = Math.floor(Date.now() / 1000 / timeStep);
    for (let errorWindow = -window; errorWindow <= window; errorWindow++) {
      const generatedToken = this.generateHOTP(secret, currentTime + errorWindow, token.length);
      if (generatedToken === token) {
        return true;
      }
    }
    return false;
  }

  /**
   * 将Base32编码的字符串转换为十六进制字符串。
   * @param base32 Base32编码的字符串。
   * @returns 转换后的十六进制字符串。
   * @private
   */
  private static base32ToHex(base32: string): string {
    let bits = '';
    for (let i = 0; i < base32.length; i++) {
      const val = this.base32Chars.indexOf(base32.charAt(i).toUpperCase());
      bits += this.leftPad(val.toString(2), 5, '0');
    }

    let hex = '';
    for (let i = 0; i + 4 <= bits.length; i += 4) {
      const chunk = bits.substr(i, 4);
      hex += parseInt(chunk, 2).toString(16);
    }
    return hex;
  }

  /**
   * 左填充字符串。
   * @param str 要填充的字符串。
   * @param length 填充后的总长度。
   * @param padChar 用于填充的字符。
   * @returns 填充后的字符串。
   * @private
   */
  private static leftPad(str: string, length: number, padChar: string): string {
    return str.length >= length ? str : new Array(length - str.length + 1).join(padChar) + str;
  }
}

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
