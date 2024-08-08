import { validateForm } from './validateForm'; // 假设之前已经创建了 validateForm.ts

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
export function generateDynamicForm<T>(
    formData: T,
    labels: Record<keyof T, string>,
    validators: Record<keyof T, (value: any) => string | null>,
    formElement: HTMLFormElement
): void {
    formElement.innerHTML = ''; // 清空表单

    // 为每个表单字段生成输入元素
    Object.keys(formData as any).forEach((key) => {
        const label = document.createElement('label');
        label.textContent = labels[key as keyof T];
        const input = document.createElement('input');
        input.name = key;
        input.value = String(formData[key as keyof T]);

        input.addEventListener('input', () => {
            const validation = validateForm({ [key]: input.value } as Partial<T>, {
                [key]: validators[key as keyof T],
            } as Record<keyof T, (value: any) => string | null>);

            if (validation.isValid) {
                input.setCustomValidity('');
            } else {
                input.setCustomValidity(validation.errors[key as keyof T] || '');
            }
        });

        formElement.appendChild(label);
        formElement.appendChild(input);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    formElement.appendChild(submitButton);

    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        const validation = validateForm(formData, validators);
        if (validation.isValid) {
            console.log('Form submitted successfully!', formData);
        } else {
            console.error('Form submission failed', validation.errors);
        }
    });
}
