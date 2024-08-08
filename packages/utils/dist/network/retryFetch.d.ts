/**
 * 带有重试功能的fetch请求。
 * @param url - 请求的URL。
 * @param options - fetch请求的选项。
 * @param retries - 最大重试次数。
 * @param delay - 每次重试之间的延迟时间（毫秒）。
 * @returns 返回一个Promise，包含fetch请求的响应。
 */
export declare function retryFetch(url: string, options?: RequestInit, retries?: number, delay?: number): Promise<Response>;
