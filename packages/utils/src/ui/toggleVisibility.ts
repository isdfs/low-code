/**
 * 切换元素的可见性状态（显示/隐藏）。
 * @param element - 目标HTML元素。
 */
export function toggleVisibility(element: HTMLElement): void {
  element.style.display = element.style.display === 'none' ? 'block' : 'none';
}
