/**
 * StaggeredSequencer 是交错动画序列器，用于以交错方式执行一组动画。
 */
class StaggeredSequencer {
  private animations: KeyframeAnimation[] = [];
  private staggerTime: number;

  constructor(staggerTime: number) {
      this.staggerTime = staggerTime;
  }

  /**
   * addAnimation 方法用于向序列器中添加动画。
   * @param animation - 要添加的 KeyframeAnimation 实例。
   */
  addAnimation(animation: KeyframeAnimation) {
      this.animations.push(animation);
  }

  /**
   * start 方法以交错方式开始所有动画。
   */
  start() {
      this.animations.forEach((animation, index) => {
          setTimeout(() => {
              animation.start();
          }, index * this.staggerTime);
      });
  }
}

/**
* 使用示例：
* const staggeredSequencer = new StaggeredSequencer(200);
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 500 });
* const anim3 = new KeyframeAnimation(element3, { duration: 500 });
* staggeredSequencer.addAnimation(anim1);
* staggeredSequencer.addAnimation(anim2);
* staggeredSequencer.addAnimation(anim3);
* staggeredSequencer.start(); // 以 200ms 的间隔交错启动每个动画
*/
