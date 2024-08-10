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

export class OAuthManager {
  private accessToken: any | string | null = null;
  private refreshToken: any | string | null = null;

  constructor(private config: OAuthConfig) {}

  /**
   * 生成授权URL，用户可以通过此URL进行授权。
   * @returns 授权URL。
   */
  generateAuthorizationUrl(): string {
    const url = new URL(this.config.authorizationUrl);
    url.searchParams.append('client_id', this.config.clientId);
    url.searchParams.append('redirect_uri', this.config.redirectUri);
    url.searchParams.append('response_type', 'code');
    url.searchParams.append('scope', this.config.scope);
    return url.toString();
  }

  /**
   * 使用授权码获取访问令牌。
   * @param authorizationCode 授权码。
   * @returns 返回访问令牌和刷新令牌。
   */
  async fetchAccessToken(authorizationCode: string): Promise<{ accessToken: string; refreshToken: string }> {
    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: authorizationCode,
        redirect_uri: this.config.redirectUri,
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
      }),
    });

    if (!response.ok) {
      throw new Error('获取访问令牌失败');
    }

    const data = await response.json();
    this.accessToken = data.access_token;
    this.refreshToken = data.refresh_token;

    return {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
    };
  }

  /**
   * 使用刷新令牌刷新访问令牌。
   * @returns 返回新的访问令牌。
   */
  async refreshAccessToken(): Promise<string> {
    if (!this.refreshToken) {
      throw new Error('刷新令牌不存在，无法刷新访问令牌');
    }

    const response = await fetch(this.config.tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.refreshToken,
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
      }),
    });

    if (!response.ok) {
      throw new Error('刷新访问令牌失败');
    }

    const data = await response.json();
    this.accessToken = data.access_token;

    return this.accessToken;
  }

  /**
   * 获取当前的访问令牌。
   * @returns 当前的访问令牌。
   */
  getAccessToken(): string | null {
    return this.accessToken;
  }
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
