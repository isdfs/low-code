/**
 * AnimationMixerOptions 用于配置动画混合器的选项。
 * @param duration - 动画的总时长，以毫秒为单位。
 * @param easing - 动画的缓动函数，可以是自定义的缓动函数或标准的缓动函数。
 */
interface AnimationMixerOptions {
  duration: number;
  easing?: (t: number) => number;
}

/**
* MixedAnimation 定义了一个混合动画。
* @param animation - 要混合的 KeyframeAnimation 实例。
* @param weight - 动画的混合权重 (0.0 - 1.0)。
*/
interface MixedAnimation {
  animation: KeyframeAnimation;
  weight: number;
}

/**
* AnimationMixer 类实现了动画混合器。
*/
class AnimationMixer {
  private animations: MixedAnimation[] = [];
  private options: AnimationMixerOptions;
  private element: HTMLElement;
  private startTime: number | null = null;
  private animationFrameId: number | null = null;

  constructor(element: HTMLElement, options: AnimationMixerOptions) {
      this.element = element;
      this.options = options;
  }

  /**
   * addAnimation 方法用于向混合器添加动画。
   * @param animation - 要添加的 KeyframeAnimation 实例。
   * @param weight - 动画的混合权重 (0.0 - 1.0)。
   */
  addAnimation(animation: KeyframeAnimation, weight: number) {
      this.animations.push({ animation, weight });
  }

  /**
   * start 方法开始混合动画。
   */
  start() {
      this.startTime = null;
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止混合动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
      this.startTime = null;
  }

  /**
   * animate 方法是混合动画的主循环，计算并应用混合动画效果。
   * @param timestamp - 当前时间戳。
   */
  private animate(timestamp: number) {
      if (!this.startTime) this.startTime = timestamp;
      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.options.easing ? this.options.easing(progress) : progress;

      this.animations.forEach(({ animation, weight }) => {
          // 模拟混合效果，通过权重调整动画影响
          const localProgress = easedProgress * weight;
          animation.start();
      });

      if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      } else {
          this.stop();
      }
  }
}

/**
* 使用示例：
* const mixer = new AnimationMixer(myElement, { duration: 1500, easing: t => t });
* const anim1 = new KeyframeAnimation(myElement, { duration: 500 });
* const anim2 = new KeyframeAnimation(myElement, { duration: 1000 });
* mixer.addAnimation(anim1, 0.7); // anim1 权重 0.7
* mixer.addAnimation(anim2, 0.3); // anim2 权重 0.3
* mixer.start(); // 开始混合动画
*/
