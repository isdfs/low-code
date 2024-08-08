/**
 * 带有重试功能的fetch请求。
 * @param url - 请求的URL。
 * @param options - fetch请求的选项。
 * @param retries - 最大重试次数。
 * @param delay - 每次重试之间的延迟时间（毫秒）。
 * @returns 返回一个Promise，包含fetch请求的响应。
 */
export async function retryFetch(url: string, options: RequestInit = {}, retries: number = 3, delay: number = 1000): Promise<Response> {
  for (let i = 0; i < retries; i++) {
      try {
          const response = await fetch(url, options);
          if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
          return response;
      } catch (error) {
          if (i < retries - 1) {
              await new Promise(resolve => setTimeout(resolve, delay));
          } else {
              throw error;
          }
      }
  }
  throw new Error('Retry limit exceeded');
}
