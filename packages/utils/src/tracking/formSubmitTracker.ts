/**
 * 表单提交埋点模块。
 * 
 * 该模块用于捕获表单提交事件，并将表单数据与事件名称一起发送到指定的服务器。
 * 
 * @param {HTMLFormElement} form - 要捕获提交事件的表单元素。
 * @param {string} [url='/track'] - 接收表单提交数据的服务器URL，默认为 '/track'。
 * @returns {void}
 * 
 * @example
 * ```
 * const form = document.getElementById('contact-form');
 * trackFormSubmit(form);
 * ```
 */

/**
 * 捕获表单提交事件并发送数据。
 * 
 * @param {HTMLFormElement} form - 要捕获提交事件的表单元素。
 * @param {string} [url='/track'] - 接收表单提交数据的服务器URL，默认为 '/track'。
 * @returns {void}
 * 
 * @example
 * ```
 * const form = document.getElementById('contact-form');
 * trackFormSubmit(form);
 * ```
 */
export function trackFormSubmit(form: HTMLFormElement, url: string = '/track'): void {
  form.addEventListener('submit', (event) => {
      const formData: any = new FormData(form);
      const data = {
          event: 'form_submit',
          formId: form.id,
          timestamp: new Date().toISOString(),
          formData: Object.fromEntries(formData.entries()),
      };

      navigator.sendBeacon(url, JSON.stringify(data));
  });
}
