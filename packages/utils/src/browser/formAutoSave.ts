/**
 * 自动保存表单数据。
 * 
 * 该方法用于在用户填写表单时自动保存数据到本地存储，以便在页面刷新或意外关闭时能够恢复数据。
 * 
 * @param {HTMLFormElement} form - 要自动保存的表单元素。
 * @param {string} storageKey - 用于保存数据的本地存储键名。
 * 
 * @returns {void}
 * 
 * @example
 * ```
 * const form = document.querySelector('form');
 * autoSaveFormData(form, 'myFormData');
 * 
 * // 恢复数据
 * restoreFormData(form, 'myFormData');
 * ```
 */
export function autoSaveFormData(form: HTMLFormElement, storageKey: string): void {
  form.addEventListener('input', () => {
      const formData: any = new FormData(form);
      let d: any = Array.from(formData.entries())
      const data = d.reduce((acc: any, [key, value]: any) => {
          (acc)[key] = value;
          return acc;
      }, {} as Record<string, string>);
      localStorage.setItem(storageKey, JSON.stringify(data));
  });
}

/**
* 恢复表单数据。
* 
* 该方法用于从本地存储中恢复表单数据，并自动填充到表单字段中。
* 
* @param {HTMLFormElement} form - 要恢复数据的表单元素。
* @param {string} storageKey - 保存数据的本地存储键名。
* 
* @returns {void}
* 
* @example
* ```
* const form = document.querySelector('form');
* restoreFormData(form, 'myFormData');
* ```
*/
export function restoreFormData(form: HTMLFormElement, storageKey: string): void {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
      const data = JSON.parse(savedData);
      Object.keys(data).forEach(key => {
          const field = form.elements.namedItem(key);
          if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
              field.value = data[key];
          }
      });
  }
}
