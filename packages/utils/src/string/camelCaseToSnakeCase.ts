/**
 * 将驼峰命名转换为蛇形命名。
 * @param str - 需要转换的驼峰命名字符串。
 * @returns 转换后的蛇形命名字符串。
 */
export function camelCaseToSnakeCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}
