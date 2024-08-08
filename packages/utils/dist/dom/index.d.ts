/**
 * 获取元素相对于页面的偏移量（包括滚动）。
 *
 * @param {HTMLElement} element - 要获取偏移量的元素。
 * @returns {{ top: number, left: number }} 元素的顶部和左侧的偏移量。
 *
 * @example
 * const offset = getElementOffset(document.getElementById('myElement')!);
 * console.log(offset); // { top: 100, left: 50 }
 */
export { getElementOffset } from './getElementOffset';
/**
 * 平滑滚动到页面上的指定元素。
 * @param element - 要滚动到的目标元素。
 * @param offset - 滚动时的偏移量（默认为0）。
 */
export { scrollToElement } from './scrollToElement';
/**
 * 切换元素上的一个或多个类名。
 *
 * @param {HTMLElement} element - 要操作的元素。
 * @param {string} className - 要切换的类名，可以是多个类名用空格分隔。
 *
 * @example
 * toggleClass(document.getElementById('myElement')!, 'active');
 */
export { toggleClass } from './toggleClass';
