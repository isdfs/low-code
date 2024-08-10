/**
 * JWT管理器模块，用于生成、验证和解析JSON Web Token。
 */

import * as crypto from 'crypto';

export interface JWTHeader {
  alg: 'HS256' | 'HS384' | 'HS512';
  typ: 'JWT';
}

export interface JWTPayload {
  iss?: string; // 签发者
  sub?: string; // 主题
  aud?: string; // 受众
  exp?: number; // 过期时间（时间戳）
  nbf?: number; // 生效时间（时间戳）
  iat?: number; // 签发时间（时间戳）
  jti?: string; // JWT ID
  [key: string]: any; // 其他自定义字段
}

export class JWTManager {
  private secretKey: string;
  private algorithm: 'HS256' | 'HS384' | 'HS512';

  /**
   * 创建一个JWT管理器实例。
   * @param secretKey 用于签名和验证的密钥。
   * @param algorithm 使用的哈希算法，默认为HS256。
   */
  constructor(secretKey: string, algorithm: 'HS256' | 'HS384' | 'HS512' = 'HS256') {
    this.secretKey = secretKey;
    this.algorithm = algorithm;
  }

  /**
   * 生成JWT令牌。
   * @param payload 载荷数据。
   * @returns 生成的JWT字符串。
   */
  generateToken(payload: JWTPayload): string {
    const header: JWTHeader = {
      alg: this.algorithm,
      typ: 'JWT',
    };

    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));
    const signature = this.createSignature(`${encodedHeader}.${encodedPayload}`);

    return `${encodedHeader}.${encodedPayload}.${signature}`;
  }

  /**
   * 验证JWT令牌的有效性。
   * @param token 要验证的JWT字符串。
   * @returns 如果令牌有效，返回解析后的载荷数据；否则抛出错误。
   */
  verifyToken(token: string): JWTPayload {
    const [encodedHeader, encodedPayload, signature] = token.split('.');
    if (!encodedHeader || !encodedPayload || !signature) {
      throw new Error('无效的JWT格式');
    }

    const expectedSignature = this.createSignature(`${encodedHeader}.${encodedPayload}`);
    if (signature !== expectedSignature) {
      throw new Error('令牌签名无效');
    }

    const payload: JWTPayload = JSON.parse(this.base64UrlDecode(encodedPayload));
    const currentTime = Math.floor(Date.now() / 1000);

    if (payload.exp && currentTime >= payload.exp) {
      throw new Error('令牌已过期');
    }

    if (payload.nbf && currentTime < payload.nbf) {
      throw new Error('令牌尚未生效');
    }

    return payload;
  }

  /**
   * 创建签名。
   * @param data 要签名的数据。
   * @returns 签名字符串。
   * @private
   */
  private createSignature(data: string): string {
    const hmac = crypto.createHmac(this.getHashAlgorithm(), this.secretKey);
    hmac.update(data);
    return this.base64UrlEncode(hmac.digest('base64'));
  }

  /**
   * 根据算法获取对应的哈希算法名称。
   * @returns 哈希算法名称。
   * @private
   */
  private getHashAlgorithm(): string {
    switch (this.algorithm) {
      case 'HS256':
        return 'sha256';
      case 'HS384':
        return 'sha384';
      case 'HS512':
        return 'sha512';
      default:
        throw new Error('不支持的算法');
    }
  }

  /**
   * 执行Base64URL编码。
   * @param input 要编码的字符串。
   * @returns 编码后的字符串。
   * @private
   */
  private base64UrlEncode(input: string): string {
    return Buffer.from(input)
      .toString('base64')
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  /**
   * 执行Base64URL解码。
   * @param input 要解码的字符串。
   * @returns 解码后的字符串。
   * @private
   */
  private base64UrlDecode(input: string): string {
    input = input.replace(/-/g, '+').replace(/_/g, '/');
    const pad = input.length % 4;
    if (pad) {
      input += '='.repeat(4 - pad);
    }
    return Buffer.from(input, 'base64').toString();
  }
}

/**
 * 使用示例：
 * ```typescript
 * const jwtManager = new JWTManager('your-secret-key');
 * 
 * const token = jwtManager.generateToken({
 *   sub: '1234567890',
 *   name: 'John Doe',
 *   iat: Math.floor(Date.now() / 1000),
 *   exp: Math.floor(Date.now() / 1000) + 3600, // 1小时后过期
 * });
 * 
 * console.log(`生成的JWT: ${token}`);
 * 
 * try {
 *   const payload = jwtManager.verifyToken(token);
 *   console.log('令牌有效，载荷数据:', payload);
 * } catch (error) {
 *   console.error('令牌验证失败:', error);
 * }
 * ```
 */
