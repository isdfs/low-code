/**
 * REST API客户端模块，支持常规的RESTful服务操作。
 */
export interface RestClientConfig {
    baseUrl: string;
    headers?: Record<string, string>;
}
export declare class RestApiClient {
    private config;
    constructor(config: RestClientConfig);
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
