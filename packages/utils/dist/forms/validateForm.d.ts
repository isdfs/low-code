/**
 * 验证表单数据是否符合指定的验证规则。
 *
 * @template T - 表单数据的类型。
 * @param {T} formData - 表单数据对象。
 * @param {Record<keyof T, (value: any) => string | null>} validators - 每个字段的验证规则，返回错误信息或null。
 * @returns {{ isValid: boolean, errors: Partial<Record<keyof T, string>> }} - 返回验证结果和错误信息。
 *
 * @example
 * const validators = {
 *   username: (value: string) => value.length < 3 ? 'Username too short' : null,
 *   password: (value: string) => value.length < 6 ? 'Password too short' : null,
 * };
 * const result = validateForm({ username: 'foo', password: 'bar' }, validators);
 * console.log(result); // { isValid: false, errors: { password: 'Password too short' } }
 */
export declare function validateForm<T>(formData: T, validators: Record<keyof T, (value: any) => string | null>): {
    isValid: boolean;
    errors: Partial<Record<keyof T, string>>;
};
