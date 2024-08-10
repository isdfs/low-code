/**
 * 使用SHA-256算法对文本进行哈希处理。
 * @param text - 要哈希的文本。
 * @returns 返回一个Promise，包含哈希值的十六进制字符串。
 */
export async function hashText(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(byte => byte.toString(16).padStart(2, '0')).join('');
}
