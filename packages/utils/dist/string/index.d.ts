/**
 * 将驼峰命名转换为蛇形命名。
 * @param str - 需要转换的驼峰命名字符串。
 * @returns 转换后的蛇形命名字符串。
 */
export { camelCaseToSnakeCase } from './camelCaseToSnakeCase';
/**
 * 将字符串的首字母大写。
 *
 * @param str - 要转换的字符串。
 * @returns 首字母大写后的字符串。
 */
export { capitalize } from './capitalize';
/**
 * 将字符串转换为 kebab-case（短横线连接的形式）。
 *
 * @param str - 要转换的字符串。
 * @returns 转换后的 kebab-case 字符串。
 */
export { kebabCase } from './kebabCase';
/**
 * 反转字符串。
 *
 * @param {string} str - 要反转的字符串。
 * @returns {string} 反转后的字符串。
 *
 * @example
 * const reversed = reverseString('hello');
 * console.log(reversed); // 'olleh'
 */
export { reverseString } from './reverseString';
/**
 * 截断字符串并添加省略号（如果需要）。
 *
 * @param {string} str - 要截断的字符串。
 * @param {number} maxLength - 字符串的最大长度。
 * @param {string} [suffix='...'] - 要添加的后缀（默认是'...'）。
 * @returns {string} 截断后的字符串。
 *
 * @example
 * const truncated = truncate('This is a long string', 10);
 * console.log(truncated); // 'This is...'
 */
export { truncate } from './truncate';
