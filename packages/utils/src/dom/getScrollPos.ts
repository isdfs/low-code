/**
 * 获取页面或元素的滚动位置。
 * @param element - 可选，目标元素，默认是window。
 * @returns 返回一个包含x和y滚动位置的对象。
 */
export function getScrollPos(element: HTMLElement | Window = window): { x: number; y: number } {
  if (element instanceof Window) {
      return {
          x: element.pageXOffset,
          y: element.pageYOffset
      };
  } else {
      return {
          x: element.scrollLeft,
          y: element.scrollTop
      };
  }
}
