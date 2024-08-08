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
export function isPhoneNumber(phoneNumber: string): boolean {
  const pattern = /^\+?[1-9]\d{1,14}$/;
  return pattern.test(phoneNumber);
}
