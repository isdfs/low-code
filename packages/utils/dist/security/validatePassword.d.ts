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
export declare function validatePassword(password: string, minLength?: number, requireUppercase?: boolean, requireLowercase?: boolean, requireNumber?: boolean, requireSpecialChar?: boolean): boolean;
