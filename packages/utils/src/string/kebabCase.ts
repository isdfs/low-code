/**
 * 将字符串转换为 kebab-case（短横线连接的形式）。
 * 
 * @param str - 要转换的字符串。
 * @returns 转换后的 kebab-case 字符串。
 */
export function kebabCase(str: string): string {
  return str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]+|[0-9]+/g)
      ?.map(x => x.toLowerCase())
      .join('-') || '';
}
