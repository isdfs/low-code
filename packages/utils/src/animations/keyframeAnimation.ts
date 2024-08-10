/**
 * Keyframe defines the structure for an animation keyframe.
 * @param time - 时间戳，表示关键帧的位置 (0.0 - 1.0)。
 * @param properties - 要应用的CSS属性集合。
 */
interface Keyframe {
  time: number;
  properties: Record<string, string | number>;
}

/**
* KeyframeAnimationOptions 用于配置关键帧动画的选项。
* @param duration - 动画的总时长，以毫秒为单位。
* @param easing - 动画的缓动函数，可以是自定义的缓动函数或标准的缓动函数。
* @param loop - 是否循环播放动画。
*/
interface KeyframeAnimationOptions {
  duration: number;
  easing?: (t: number) => number;
  loop?: boolean;
}

/**
* KeyframeAnimation 是关键帧动画类，用于管理和执行关键帧动画。
*/
class KeyframeAnimation {
  private keyframes: Keyframe[] = [];
  private options: KeyframeAnimationOptions;
  private element: HTMLElement;
  private startTime: number | null = null;
  private animationFrameId: number | null = null;

  constructor(element: HTMLElement, options: KeyframeAnimationOptions) {
      this.element = element;
      this.options = {
          easing: options.easing || ((t: number) => t), // 默认线性缓动
          loop: options.loop || false,
          duration: options.duration
      };
  }

  /**
   * addKeyframe 方法用于向动画中添加关键帧。
   * @param keyframe - 要添加的关键帧。
   */
  addKeyframe(keyframe: Keyframe) {
      this.keyframes.push(keyframe);
      this.keyframes.sort((a, b) => a.time - b.time); // 根据时间排序关键帧
  }

  /**
   * start 方法开始动画。
   */
  start() {
      this.startTime = null;
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
      this.startTime = null;
  }

  /**
   * animate 方法是动画的主循环，用于计算当前时间点的动画状态并应用。
   * @param timestamp - 当前时间戳。
   */
  private animate(timestamp: number) {
      if (!this.startTime) this.startTime = timestamp;
      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.options.easing!(progress);

      this.applyProperties(easedProgress);

      if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      } else if (this.options.loop) {
          this.start();
      }
  }

  /**
   * applyProperties 方法根据进度应用关键帧之间的属性变化。
   * @param progress - 当前动画的进度 (0.0 - 1.0)。
   */
  private applyProperties(progress: number) {
      let startKeyframe: Keyframe | null = null;
      let endKeyframe: Keyframe | null = null;

      for (let i = 0; i < this.keyframes.length; i++) {
          if (this.keyframes[i].time <= progress) {
              startKeyframe = this.keyframes[i];
          }
          if (this.keyframes[i].time >= progress) {
              endKeyframe = this.keyframes[i];
              break;
          }
      }

      if (startKeyframe && endKeyframe) {
          const startProgress = startKeyframe.time;
          const endProgress = endKeyframe.time;
          const localProgress = (progress - startProgress) / (endProgress - startProgress);

          for (const property in startKeyframe.properties) {
              const startValue = startKeyframe.properties[property];
              const endValue = endKeyframe.properties[property];

              if (typeof startValue === 'number' && typeof endValue === 'number') {
                  const value = startValue + (endValue - startValue) * localProgress;
                  this.element.style[property as any] = `${value}`;
              } else {
                  this.element.style[property as any] = endValue as string;
              }
          }
      }
  }
}

/**
* 使用示例：
* const anim = new KeyframeAnimation(myElement, { duration: 2000, easing: t => t * t, loop: true });
* anim.addKeyframe({ time: 0, properties: { opacity: 0, transform: 'scale(0.5)' } });
* anim.addKeyframe({ time: 0.5, properties: { opacity: 1, transform: 'scale(1.0)' } });
* anim.addKeyframe({ time: 1, properties: { opacity: 0, transform: 'scale(0.5)' } });
* anim.start();
*/
