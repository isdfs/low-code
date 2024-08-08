/**
 * 使元素淡入显示。
 *
 * @param {HTMLElement} element - 要淡入的元素。
 * @param {number} [duration=400] - 动画持续时间（毫秒）。
 *
 * @example
 * fadeIn(document.getElementById('myElement')!, 500);
 */
export function fadeIn(element: HTMLElement, duration: number = 400): void {
  element.style.opacity = '0';
  element.style.display = 'block';

  let last = +new Date();
  const tick = function() {
      const opacity = parseFloat(element.style.opacity);
      const nextOpacity = opacity + (new Date().getTime() - last) / duration;

      element.style.opacity = nextOpacity.toString();
      last = +new Date();

      if (nextOpacity < 1) {
          requestAnimationFrame(tick);
      }
  };

  tick();
}
