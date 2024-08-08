/**
 * 使用CSS动画动画化指定的元素。
 *
 * @param {HTMLElement} element - 要动画化的元素。
 * @param {string} animationName - 动画名称（对应CSS类名）。
 * @param {number} [duration=1000] - 动画持续时间（毫秒）。
 * @returns {Promise<void>} 动画完成后的Promise。
 *
 * @example
 * animateElement(document.getElementById('myElement')!, 'bounce', 500).then(() => {
 *   console.log('Animation finished');
 * });
 */
export declare function animateElement(element: HTMLElement, animationName: string, duration?: number): Promise<void>;
