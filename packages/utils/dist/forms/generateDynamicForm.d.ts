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
export declare function generateDynamicForm<T>(formData: T, labels: Record<keyof T, string>, validators: Record<keyof T, (value: any) => string | null>, formElement: HTMLFormElement): void;
