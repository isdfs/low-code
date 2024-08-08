/**
 * 动态表单验证器，用于处理和验证动态生成的表单。
 *
 * @template T - 表单字段类型。
 * @param {Record<keyof T, (value: any) => string | null>} validators - 每个字段的验证规则。
 * @returns {{
 *   validate: (formData: T) => { isValid: boolean, errors: Partial<Record<keyof T, string>> },
 *   addValidator: (field: keyof T, validator: (value: any) => string | null) => void
 * }} - 包含验证表单数据和动态添加验证规则的方法。
 *
 * @example
 * const formValidator = dynamicFormValidator<{ username: string, email: string }>();
 * formValidator.addValidator('username', value => value.length < 3 ? 'Username too short' : null);
 * formValidator.addValidator('email', value => !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email' : null);
 * const result = formValidator.validate({ username: 'John', email: 'john@example.com' });
 * console.log(result); // { isValid: true, errors: {} }
 */
export { dynamicFormValidator } from './dynamicFormValidator';

/**
 * 动态生成并验证表单。
 *
 * @template T - 表单数据的类型。
 * @param {T} formData - 表单数据对象。
 * @param {Record<keyof T, string>} labels - 每个字段的标签。
 * @param {Record<keyof T, (value: any) => string | null>} validators - 每个字段的验证规则。
 * @param {HTMLFormElement} formElement - 要填充的表单元素。
 * @returns {void}
 *
 * @example
 * const formData = { username: '', password: '' };
 * const labels = { username: 'Username', password: 'Password' };
 * const validators = {
 *   username: (value: string) => value.length < 3 ? 'Username too short' : null,
 *   password: (value: string) => value.length < 6 ? 'Password too short' : null,
 * };
 * generateDynamicForm(formData, labels, validators, document.getElementById('myForm')!);
 */
export { generateDynamicForm } from './generateDynamicForm';

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
export { validateForm } from './validateForm';