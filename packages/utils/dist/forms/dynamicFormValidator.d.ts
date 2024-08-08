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
export declare function dynamicFormValidator<T>(validators?: Record<keyof T, (value: any) => string | null>): {
    validate: (formData: T) => {
        isValid: boolean;
        errors: Partial<Record<keyof T, string>>;
    };
    addValidator: (field: keyof T, validator: (value: any) => string | null) => void;
};
