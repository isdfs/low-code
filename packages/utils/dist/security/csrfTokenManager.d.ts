/**
 * CSRF令牌管理器模块，用于生成和验证CSRF令牌，防止跨站请求伪造攻击。
 */
export declare class CSRFTokenManager {
    private secretKey;
    /**
     * 创建一个CSRF令牌管理器实例。
     * @param secretKey 用于生成和验证CSRF令牌的密钥。
     */
    constructor(secretKey: string);
    /**
     * 生成一个新的CSRF令牌。
     * @param sessionId 用户的会话ID，用于绑定令牌和会话。
     * @returns 生成的CSRF令牌。
     */
    generateToken(sessionId: string): string;
    /**
     * 验证CSRF令牌的有效性。
     * @param token 要验证的CSRF令牌。
     * @param sessionId 用户的会话ID，用于验证令牌是否与会话绑定。
     * @param maxAge 最大有效期，单位为秒，默认3600秒（1小时）。
     * @returns 如果令牌有效，返回true；否则返回false。
     */
    verifyToken(token: string, sessionId: string, maxAge?: number): boolean;
    /**
     * 创建签名。
     * @param data 要签名的数据。
     * @returns 签名字符串。
     * @private
     */
    private createSignature;
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
