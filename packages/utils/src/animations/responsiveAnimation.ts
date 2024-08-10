/**
 * ResponsiveAnimationOptions 用于配置响应式动画的选项。
 * @param breakpoints - 不同屏幕尺寸下的动画配置。
 */
interface ResponsiveAnimationOptions {
  breakpoints: { [key: string]: KeyframeAnimation };
}

/**
* ResponsiveAnimation 类实现了响应式动画管理。
*/
class ResponsiveAnimation {
  private breakpoints: { [key: string]: KeyframeAnimation };
  private currentBreakpoint: string | null = null;
  private resizeObserver: ResizeObserver;

  constructor(element: HTMLElement, options: ResponsiveAnimationOptions) {
      this.breakpoints = options.breakpoints;
      this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
      this.resizeObserver.observe(element);
  }

  /**
   * handleResize 方法根据当前窗口大小选择适当的动画配置。
   * @param entries - 观察到的元素尺寸变化。
   */
  private handleResize(entries: ResizeObserverEntry[]) {
      const entry = entries[0];
      const width = entry.contentRect.width;
      let selectedBreakpoint: string | null = null;

      if (width < 600) {
          selectedBreakpoint = 'small';
      } else if (width < 1200) {
          selectedBreakpoint = 'medium';
      } else {
          selectedBreakpoint = 'large';
      }

      if (selectedBreakpoint && selectedBreakpoint !== this.currentBreakpoint) {
          this.currentBreakpoint = selectedBreakpoint;
          this.breakpoints[selectedBreakpoint].start();
      }
  }
}

/**
* 使用示例：
* const animSmall = new KeyframeAnimation(element, { duration: 500 });
* const animMedium = new KeyframeAnimation(element, { duration: 1000 });
* const animLarge = new KeyframeAnimation(element, { duration: 1500 });
* const responsiveAnim = new ResponsiveAnimation(element, { breakpoints: { small: animSmall, medium: animMedium, large: animLarge } });
* // 根据窗口尺寸自动选择并应用不同的动画
*/
