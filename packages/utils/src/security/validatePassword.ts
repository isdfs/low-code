/**
 * 验证密码的复杂性，检查是否符合指定的安全标准。
 * @param password - 需要验证的密码。
 * @param minLength - 密码的最小长度，默认为8。
 * @param requireUppercase - 是否要求包含大写字母，默认为true。
 * @param requireLowercase - 是否要求包含小写字母，默认为true。
 * @param requireNumber - 是否要求包含数字，默认为true。
 * @param requireSpecialChar - 是否要求包含特殊字符，默认为true。
 * @returns 如果密码符合标准则返回true，否则返回false。
 */
export function validatePassword(
  password: string,
  minLength: number = 8,
  requireUppercase: boolean = true,
  requireLowercase: boolean = true,
  requireNumber: boolean = true,
  requireSpecialChar: boolean = true
): boolean {
  const uppercasePattern = /[A-Z]/;
  const lowercasePattern = /[a-z]/;
  const numberPattern = /[0-9]/;
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (password.length < minLength) {
    return false;
  }
  if (requireUppercase && !uppercasePattern.test(password)) {
    return false;
  }
  if (requireLowercase && !lowercasePattern.test(password)) {
    return false;
  }
  if (requireNumber && !numberPattern.test(password)) {
    return false;
  }
  if (requireSpecialChar && !specialCharPattern.test(password)) {
    return false;
  }
  
  return true;
}
