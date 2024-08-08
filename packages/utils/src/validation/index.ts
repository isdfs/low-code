/**
 * 验证字符串是否为有效的电子邮件格式
 *
 * @param {string} email - 需要验证的电子邮件字符串
 * @returns {boolean} 返回是否为有效的电子邮件
 *
 * @example
 * const valid = isEmail('test@example.com');
 * console.log(valid); // true
 */
export { isEmail } from './isEmail';

/**
 * 检查对象、数组、字符串或 Map 是否为空
 *
 * @param {any} value - 需要检查的值
 * @returns {boolean} 返回是否为空
 *
 * @example
 * const empty = isEmpty([]);
 * console.log(empty); // true
 */
export { isEmpty } from './isEmpty';

/**
 * 验证给定的字符串是否为有效的电话号码。
 *
 * @param {string} phoneNumber - 要验证的电话号码字符串。
 * @returns {boolean} 如果是有效的电话号码则返回true，否则返回false。
 *
 * @example
 * const isValid = isPhoneNumber('+1234567890');
 * console.log(isValid); // true
 */
export { isPhoneNumber } from './isPhoneNumber';

/**
 * 验证给定的字符串是否为有效的URL。
 *
 * @param {string} url - 要验证的字符串。
 * @returns {boolean} 如果是有效的URL则返回true，否则返回false。
 *
 * @example
 * const isValid = isURL('https://www.example.com');
 * console.log(isValid); // true
 */
export { isURL } from './isURL';

/**
 * 验证表单数据是否符合指定的验证规则。
 *
 * @param {FormData} data - 包含表单字段及其对应值的对象。
 * @param {Record<string, ValidationRule>} rules - 包含每个表单字段的验证规则的对象。
 * @returns {ValidationResult} 返回验证结果，包括是否通过验证及错误信息。
 *
 * @example
 * const data = { username: 'user1', email: 'invalidemail' };
 * const rules = {
 *   username: { required: true, message: 'Username is required' },
 *   email: { pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email format' },
 * };
 * const result = validateForm(data, rules);
 * console.log(result);
 * // { valid: false, errors: ['Invalid email format'] }
 */
export { validateForm2 } from './validateForm';