/**
 * 平滑滚动到页面上的指定元素。
 * @param element - 要滚动到的目标元素。
 * @param offset - 滚动时的偏移量（默认为0）。
 */
export function scrollToElement(element: HTMLElement, offset: number = 0): void {
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: elementPosition, behavior: 'smooth' });
}
