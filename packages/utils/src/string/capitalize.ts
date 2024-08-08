/**
 * 将字符串的首字母大写。
 * 
 * @param str - 要转换的字符串。
 * @returns 首字母大写后的字符串。
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
