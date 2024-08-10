/**
 * 动画类型的枚举。
 */
enum AnimationType {
  FadeIn = 'fadeIn',
  FadeOut = 'fadeOut',
  ScaleUp = 'scaleUp',
  ScaleDown = 'scaleDown',
  Rotate = 'rotate'
}

/**
* animateElement 函数用于对指定元素应用动画效果。
* @param element - 要应用动画的 DOM 元素。
* @param type - 要应用的动画类型。
* @param duration - 动画持续时间（毫秒）。
* @param callback - 动画结束后的回调函数。
*/
export function animateElement(
  element: HTMLElement,
  type: AnimationType,
  duration: number = 500,
  callback?: () => void
) {
  element.style.transition = `all ${duration}ms ease`;

  switch (type) {
      case AnimationType.FadeIn:
          element.style.opacity = '1';
          break;
      case AnimationType.FadeOut:
          element.style.opacity = '0';
          break;
      case AnimationType.ScaleUp:
          element.style.transform = 'scale(1)';
          break;
      case AnimationType.ScaleDown:
          element.style.transform = 'scale(0.5)';
          break;
      case AnimationType.Rotate:
          element.style.transform = 'rotate(360deg)';
          break;
  }

  if (callback) {
      setTimeout(callback, duration);
  }
}

/**
* 使用示例：
* animateElement(myElement, AnimationType.FadeIn, 1000, () => console.log('动画结束'));
*/
