/**
 * AnimationStep 定义了动画序列中的每一步。
 * @param animation - 要执行的动画实例。
 * @param delay - 执行此动画前的延迟时间，以毫秒为单位。
 */
interface AnimationStep {
  animation: KeyframeAnimation;
  delay: number;
}

/**
* AnimationSequencer 用于管理和执行动画序列的类。
*/
class AnimationSequencer {
  private steps: AnimationStep[] = [];

  /**
   * addStep 方法用于向序列中添加动画步骤。
   * @param animation - 要添加的 KeyframeAnimation 实例。
   * @param delay - 执行此动画前的延迟时间，以毫秒为单位。
   */
  addStep(animation: KeyframeAnimation, delay: number) {
      this.steps.push({ animation, delay });
  }

  /**
   * start 方法开始执行动画序列。
   */
  start() {
      let totalDelay = 0;

      this.steps.forEach(step => {
          totalDelay += step.delay;
          setTimeout(() => {
              step.animation.start();
          }, totalDelay);
      });
  }
}

/**
* 使用示例：
* const sequencer = new AnimationSequencer();
* const anim1 = new KeyframeAnimation(element1, { duration: 500, easing: t => t });
* const anim2 = new KeyframeAnimation(element2, { duration: 1000, easing: t => t * t });
* sequencer.addStep(anim1, 0); // 立即开始 anim1
* sequencer.addStep(anim2, 500); // anim1 结束后 500ms 开始 anim2
* sequencer.start();
*/
