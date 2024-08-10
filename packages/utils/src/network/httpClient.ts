/**
 * HTTP客户端模块，支持GET、POST、PUT、DELETE请求，以及请求和响应拦截器。
 */

export interface HttpClientConfig {
  baseUrl: string;
  headers?: Record<string, string>;
  requestInterceptor?: (config: RequestInit) => RequestInit;
  responseInterceptor?: (response: Response) => Response | Promise<Response>;
}

export class HttpClient {
  private config: HttpClientConfig;

  constructor(config: HttpClientConfig) {
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
    let config: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(this.config.headers || {}),
      },
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    if (this.config.requestInterceptor) {
      config = this.config.requestInterceptor(config);
    }

    let response = await fetch(url, config);

    if (this.config.responseInterceptor) {
      response = await this.config.responseInterceptor(response);
    }

    if (!response.ok) {
      throw new Error(`请求失败，状态码: ${response.status}`);
    }

    return response.json();
  }
}

/**
 * 使用示例：
 * ```typescript
 * const httpClient = new HttpClient({
 *   baseUrl: 'https://api.example.com',
 *   headers: {
 *     Authorization: 'Bearer your-token',
 *   },
 *   requestInterceptor: (config) => {
 *     console.log('请求拦截器:', config);
 *     return config;
 *   },
 *   responseInterceptor: async (response) => {
 *     console.log('响应拦截器:', response);
 *     return response;
 *   },
 * });
 * 
 * const data = await httpClient.get('users', { page: '1' });
 * console.log(data);
 * ```
 */
