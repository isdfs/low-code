/**
 * 生成一个安全的随机令牌。
 * @param length - 令牌的长度，默认为32。
 * @returns 生成的随机令牌字符串。
 */
export function generateSecureToken(length: number = 32): string {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
