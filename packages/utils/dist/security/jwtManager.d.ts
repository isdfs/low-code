/**
 * JWT管理器模块，用于生成、验证和解析JSON Web Token。
 */
export interface JWTHeader {
    alg: 'HS256' | 'HS384' | 'HS512';
    typ: 'JWT';
}
export interface JWTPayload {
    iss?: string;
    sub?: string;
    aud?: string;
    exp?: number;
    nbf?: number;
    iat?: number;
    jti?: string;
    [key: string]: any;
}
export declare class JWTManager {
    private secretKey;
    private algorithm;
    /**
     * 创建一个JWT管理器实例。
     * @param secretKey 用于签名和验证的密钥。
     * @param algorithm 使用的哈希算法，默认为HS256。
     */
    constructor(secretKey: string, algorithm?: 'HS256' | 'HS384' | 'HS512');
    /**
     * 生成JWT令牌。
     * @param payload 载荷数据。
     * @returns 生成的JWT字符串。
     */
    generateToken(payload: JWTPayload): string;
    /**
     * 验证JWT令牌的有效性。
     * @param token 要验证的JWT字符串。
     * @returns 如果令牌有效，返回解析后的载荷数据；否则抛出错误。
     */
    verifyToken(token: string): JWTPayload;
    /**
     * 创建签名。
     * @param data 要签名的数据。
     * @returns 签名字符串。
     * @private
     */
    private createSignature;
    /**
     * 根据算法获取对应的哈希算法名称。
     * @returns 哈希算法名称。
     * @private
     */
    private getHashAlgorithm;
    /**
     * 执行Base64URL编码。
     * @param input 要编码的字符串。
     * @returns 编码后的字符串。
     * @private
     */
    private base64UrlEncode;
    /**
     * 执行Base64URL解码。
     * @param input 要解码的字符串。
     * @returns 解码后的字符串。
     * @private
     */
    private base64UrlDecode;
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
