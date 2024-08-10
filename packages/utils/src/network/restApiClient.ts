/**
 * REST API客户端模块，支持常规的RESTful服务操作。
 */

export interface RestClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
}

export class RestApiClient {
  private config: RestClientConfig;

  constructor(config: RestClientConfig) {
    this.config = config;
  }

  /**
   * 发送GET请求。
   * @param endpoint 请求的API端点。
   * @param params 查询参数。
   * @returns 返回API响应结果。
   */
  async get(endpoint: string, params?: Record<string, string>): Promise<any> {
    const url = new URL(`${this.config.baseUrl}/${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
    }
    return this.request(url.toString(), 'GET');
  }

  /**
   * 发送POST请求。
   * @param endpoint 请求的API端点。
   * @param body 请求体数据。
   * @returns 返回API响应结果。
   */
  async post(endpoint: string, body: any): Promise<any> {
    return this.request(`${this.config.baseUrl}/${endpoint}`, 'POST', body);
  }

  /**
   * 发送PUT请求。
   * @param endpoint 请求的API端点。
   * @param body 请求体数据。
   * @returns 返回API响应结果。
   */
  async put(endpoint: string, body: any): Promise<any> {
    return this.request(`${this.config.baseUrl}/${endpoint}`, 'PUT', body);
  }

  /**
   * 发送DELETE请求。
   * @param endpoint 请求的API端点。
   * @returns 返回API响应结果。
   */
  async delete(endpoint: string): Promise<any> {
    return this.request(`${this.config.baseUrl}/${endpoint}`, 'DELETE');
  }

  private async request(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any): Promise<any> {
    const config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(this.config.headers || {}),
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    const response = await fetch(url, config);

    if (!response.ok) {
      throw new Error(`请求失败，状态码: ${response.status}`);
    }

    return response.json();
  }
}

/**
 * 使用示例：
 * ```typescript
 * const apiClient = new RestApiClient({
 *   baseUrl: 'https://api.example.com',
 *   headers: {
 *     Authorization: 'Bearer your-token',
 *   },
 * });
 * 
 * const data = await apiClient.get('users', { page: '1' });
 * console.log(data);
 * ```
 */
