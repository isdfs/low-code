/**
 * OAuth管理器模块，用于处理OAuth2.0授权流程。
 */
export interface OAuthConfig {
    clientId: string;
    clientSecret: string;
    authorizationUrl: string;
    tokenUrl: string;
    redirectUri: string;
    scope: string;
}
export declare class OAuthManager {
    private config;
    private accessToken;
    private refreshToken;
    constructor(config: OAuthConfig);
    /**
     * 生成授权URL，用户可以通过此URL进行授权。
     * @returns 授权URL。
     */
    generateAuthorizationUrl(): string;
    /**
     * 使用授权码获取访问令牌。
     * @param authorizationCode 授权码。
     * @returns 返回访问令牌和刷新令牌。
     */
    fetchAccessToken(authorizationCode: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    /**
     * 使用刷新令牌刷新访问令牌。
     * @returns 返回新的访问令牌。
     */
    refreshAccessToken(): Promise<string>;
    /**
     * 获取当前的访问令牌。
     * @returns 当前的访问令牌。
     */
    getAccessToken(): string | null;
}
/**
 * 使用示例：
 * ```typescript
 * const config: OAuthConfig = {
 *   clientId: 'your-client-id',
 *   clientSecret: 'your-client-secret',
 *   authorizationUrl: 'https://example.com/oauth/authorize',
 *   tokenUrl: 'https://example.com/oauth/token',
 *   redirectUri: 'https://your-app.com/callback',
 *   scope: 'read write'
 * };
 *
 * const oauthManager = new OAuthManager(config);
 * const authUrl = oauthManager.generateAuthorizationUrl();
 * console.log(`授权URL: ${authUrl}`);
 *
 * // 假设用户已经完成授权并获取到授权码
 * const authorizationCode = 'authorization-code-from-callback';
 * const tokens = await oauthManager.fetchAccessToken(authorizationCode);
 * console.log(`访问令牌: ${tokens.accessToken}`);
 * console.log(`刷新令牌: ${tokens.refreshToken}`);
 * ```
 */
