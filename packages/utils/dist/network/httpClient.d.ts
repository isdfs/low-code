/**
 * HTTP客户端模块，支持GET、POST、PUT、DELETE请求，以及请求和响应拦截器。
 */
export interface HttpClientConfig {
    baseUrl: string;
    headers?: Record<string, string>;
    requestInterceptor?: (config: RequestInit) => RequestInit;
    responseInterceptor?: (response: Response) => Response | Promise<Response>;
}
export declare class HttpClient {
    private config;
    constructor(config: HttpClientConfig);
    /**
     * 发送GET请求。
     * @param endpoint 请求的API端点。
     * @param params 查询参数。
     * @returns 返回API响应结果。
     */
    get(endpoint: string, params?: Record<string, string>): Promise<any>;
    /**
     * 发送POST请求。
     * @param endpoint 请求的API端点。
     * @param body 请求体数据。
     * @returns 返回API响应结果。
     */
    post(endpoint: string, body: any): Promise<any>;
    /**
     * 发送PUT请求。
     * @param endpoint 请求的API端点。
     * @param body 请求体数据。
     * @returns 返回API响应结果。
     */
    put(endpoint: string, body: any): Promise<any>;
    /**
     * 发送DELETE请求。
     * @param endpoint 请求的API端点。
     * @returns 返回API响应结果。
     */
    delete(endpoint: string): Promise<any>;
    private request;
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
