/**
 * 事件委托
 *
 * @param {Element} parent - 父元素
 * @param {string} selector - 目标子元素的选择器
 * @param {string} eventType - 事件类型
 * @param {Function} callback - 事件触发时的回调函数
 *
 * @example
 * delegate(document.body, 'button', 'click', (event) => {
 *   console.log('Button clicked:', event.target);
 * });
 */
export declare function delegate(parent: Element, selector: string, eventType: string, callback: (event: Event) => void): void;
