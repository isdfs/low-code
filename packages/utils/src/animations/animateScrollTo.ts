/**
 * 平滑滚动窗口或元素到目标位置。
 * @param targetPosition - 目标位置（滚动高度）。
 * @param duration - 动画持续时间（毫秒）。
 * @param element - 可选，默认是documentElement，要滚动的元素。
 */
export function animateScrollTo(targetPosition: number, duration: number, element: HTMLElement = document.documentElement) {
  const startPosition = element.scrollTop;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      element.scrollTop = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
