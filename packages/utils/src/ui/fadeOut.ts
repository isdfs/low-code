/**
 * 使元素淡出隐藏。
 *
 * @param {HTMLElement} element - 要淡出的元素。
 * @param {number} [duration=400] - 动画持续时间（毫秒）。
 *
 * @example
 * fadeOut(document.getElementById('myElement')!, 500);
 */
export function fadeOut(element: HTMLElement, duration: number = 400): void {
  element.style.opacity = '1';

  let last = +new Date();
  const tick = function() {
      const opacity = parseFloat(element.style.opacity);
      const nextOpacity = opacity - (new Date().getTime() - last) / duration;

      element.style.opacity = nextOpacity.toString();
      last = +new Date();

      if (nextOpacity > 0) {
          requestAnimationFrame(tick);
      } else {
          element.style.display = 'none';
      }
  };

  tick();
}
