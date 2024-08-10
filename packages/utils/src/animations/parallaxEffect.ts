/**
 * ParallaxOptions 用于配置视差效果的选项。
 * @param speed - 视差移动的速度系数。
 * @param axis - 指定视差效果的移动方向 ('x' | 'y')。
 */
interface ParallaxOptions {
  speed: number;
  axis?: 'x' | 'y';
}

/**
* ParallaxEffect 类实现了一个视差滚动效果系统。
*/
class ParallaxEffect {
  private element: HTMLElement;
  private options: ParallaxOptions;

  constructor(element: HTMLElement, options: ParallaxOptions) {
      this.element = element;
      this.options = { axis: 'y', ...options };
      this.init();
  }

  /**
   * init 方法用于初始化视差效果，绑定滚动事件。
   */
  private init() {
      window.addEventListener('scroll', this.applyEffect.bind(this));
  }

  /**
   * applyEffect 方法在滚动时应用视差效果。
   */
  private applyEffect() {
      const scrollPos = window.scrollY;
      const moveDistance = scrollPos * this.options.speed;
      
      if (this.options.axis === 'y') {
          this.element.style.transform = `translateY(${moveDistance}px)`;
      } else {
          this.element.style.transform = `translateX(${moveDistance}px)`;
      }
  }
}

/**
* 使用示例：
* const parallax = new ParallaxEffect(myBackgroundElement, { speed: 0.5 });
* // 该示例将根据页面的滚动位置，移动元素以创建视差效果。
*/
