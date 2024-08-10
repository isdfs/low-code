/**
 * @module FormManager
 * @description 提供动态表单生成与验证功能，支持基于字符串模板动态生成表单及其验证逻辑。
 */
interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'number';
    required?: boolean;
    pattern?: RegExp;
}
interface FormValidationResult {
    isValid: boolean;
    errors: Record<string, string>;
}
export declare class FormManager {
    private fields;
    /**
     * @description 添加表单字段
     * @param field 表单字段对象
     */
    addField(field: FormField): void;
    /**
     * @description 根据添加的字段动态生成表单 HTML 字符串
     * @returns 表单的 HTML 字符串
     * @example
     * ```typescript
     * const formManager = new FormManager();
     * formManager.addField({ name: 'username', label: 'Username', type: 'text', required: true });
     * formManager.addField({ name: 'email', label: 'Email', type: 'email', required: true });
     * const formHtml = formManager.generateFormHtml();
     * console.log(formHtml); // 输出表单 HTML 字符串
     * ```
     */
    generateFormHtml(): string;
    /**
     * @description 验证表单数据
     * @param formData 表单数据对象
     * @returns 表单验证结果，包括是否通过验证和错误信息
     * @example
     * ```typescript
     * const validationResult = formManager.validateForm({ username: 'testuser', email: 'test@example.com' });
     * console.log(validationResult.isValid); // 输出 true
     * console.log(validationResult.errors); // 输出 {}
     * ```
     */
    validateForm(formData: Record<string, string>): FormValidationResult;
}
export {};
