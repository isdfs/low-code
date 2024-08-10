/**
 * CSRF令牌管理器模块，用于生成和验证CSRF令牌，防止跨站请求伪造攻击。
 */

import * as crypto from 'crypto';

export class CSRFTokenManager {
  private secretKey: string;

  /**
   * 创建一个CSRF令牌管理器实例。
   * @param secretKey 用于生成和验证CSRF令牌的密钥。
   */
  constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  /**
   * 生成一个新的CSRF令牌。
   * @param sessionId 用户的会话ID，用于绑定令牌和会话。
   * @returns 生成的CSRF令牌。
   */
  generateToken(sessionId: string): string {
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const data = `${sessionId}:${timestamp}`;
    const signature = this.createSignature(data);
    return `${data}:${signature}`;
  }

  /**
   * 验证CSRF令牌的有效性。
   * @param token 要验证的CSRF令牌。
   * @param sessionId 用户的会话ID，用于验证令牌是否与会话绑定。
   * @param maxAge 最大有效期，单位为秒，默认3600秒（1小时）。
   * @returns 如果令牌有效，返回true；否则返回false。
   */
  verifyToken(token: string, sessionId: string, maxAge: number = 3600): boolean {
    const [tokenSessionId, timestamp, signature] = token.split(':');
    if (tokenSessionId !== sessionId) {
      return false;
    }

    const data = `${tokenSessionId}:${timestamp}`;
    const expectedSignature = this.createSignature(data);
    if (signature !== expectedSignature) {
      return false;
    }

    const currentTime = Math.floor(Date.now() / 1000);
    const tokenTime = parseInt(timestamp, 10);

    if (currentTime - tokenTime > maxAge) {
      return false;
    }

    return true;
  }

  /**
   * 创建签名。
   * @param data 要签名的数据。
   * @returns 签名字符串。
   * @private
   */
  private createSignature(data: string): string {
    return crypto.createHmac('sha256', this.secretKey).update(data).digest('hex');
  }
}

/**
 * 使用示例：
 * ```typescript
 * const csrfManager = new CSRFTokenManager('your-secret-key');
 * const sessionId = 'user-session-id';
 * const token = csrfManager.generateToken(sessionId);
 * console.log(`生成的CSRF令牌: ${token}`);
 * 
 * const isValid = csrfManager.verifyToken(token, sessionId);
 * console.log(`令牌是否有效: ${isValid}`);
 * ```
 */
