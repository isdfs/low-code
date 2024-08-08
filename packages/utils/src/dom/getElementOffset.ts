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
export function getElementOffset(element: HTMLElement): { top: number, left: number } {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
