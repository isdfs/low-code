/**
 * 生成一个随机字符串。
 * @param length - 生成的字符串长度，默认为16。
 * @returns 返回生成的随机字符串。
 */
export function genToken(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
  }
  return result;
}
