/**
 * 带超时限制的fetch请求。
 *
 * @param {string} url - 请求的URL。
 * @param {RequestInit} [options] - 请求的配置选项。
 * @param {number} timeout - 请求的超时时间（毫秒）。
 * @returns {Promise<Response>} 请求的响应。
 *
 * @example
 * fetchWithTimeout('https://api.example.com/data', {}, 5000)
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Request failed or timed out', error));
 */
export async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout: number): Promise<Response> {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
      const response = await fetch(url, { ...options, signal });
      clearTimeout(timeoutId);
      return response;
  } catch (error) {
      clearTimeout(timeoutId);
      throw error;
  }
}
