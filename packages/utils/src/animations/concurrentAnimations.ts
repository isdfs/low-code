/**
 * ConcurrentAnimationsOptions 用于配置并发动画的选项。
 * @param animations - 要并发执行的动画数组。
 * @param parallelism - 并发执行的最大动画数量。
 */
interface ConcurrentAnimationsOptions {
  animations: KeyframeAnimation[];
  parallelism: number;
}

/**
* ConcurrentAnimations 类实现了并发动画管理。
*/
class ConcurrentAnimations {
  private animations: KeyframeAnimation[];
  private parallelism: number;
  private currentIndex: number = 0;
  private activeAnimations: number = 0;

  constructor(options: ConcurrentAnimationsOptions) {
      this.animations = options.animations;
      this.parallelism = options.parallelism;
  }

  /**
   * start 方法开始并发执行动画。
   */
  start() {
      for (let i = 0; i < this.parallelism; i++) {
          this.runNextAnimation();
      }
  }

  /**
   * runNextAnimation 方法用于启动下一个动画，并在动画完成后递归启动后续动画。
   */
  private runNextAnimation() {
      if (this.currentIndex >= this.animations.length) return;
      const animation: any = this.animations[this.currentIndex++];
      this.activeAnimations++;

      animation.start();

      setTimeout(() => {
          this.activeAnimations--;
          if (this.currentIndex < this.animations.length) {
              this.runNextAnimation();
          }
      }, animation.options.duration);
  }
}

/**
* 使用示例：
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 800 });
* const anim3 = new KeyframeAnimation(element3, { duration: 1000 });
* const concurrentAnim = new ConcurrentAnimations({ animations: [anim1, anim2, anim3], parallelism: 2 });
* concurrentAnim.start(); // 同时启动 anim1 和 anim2，anim3 在一个动画完成后启动
*/
