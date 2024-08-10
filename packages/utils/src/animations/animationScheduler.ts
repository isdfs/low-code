/**
 * SchedulerTask 定义了一个调度任务。
 * @param condition - 决定任务是否执行的条件函数。
 * @param animation - 要执行的 KeyframeAnimation 实例。
 */
interface SchedulerTask {
  condition: () => boolean;
  animation: KeyframeAnimation;
}

/**
* AnimationScheduler 用于管理和调度复杂的动画任务。
*/
class AnimationScheduler {
  private tasks: SchedulerTask[] = [];
  private intervalId: any | number | null = null;
  private checkInterval: number;

  constructor(checkInterval: number = 100) {
      this.checkInterval = checkInterval;
  }

  /**
   * addTask 方法用于向调度器添加一个动画任务。
   * @param condition - 判断是否执行任务的条件函数。
   * @param animation - 要执行的 KeyframeAnimation 实例。
   */
  addTask(condition: () => boolean, animation: KeyframeAnimation) {
      this.tasks.push({ condition, animation });
  }

  /**
   * start 方法开始调度任务。
   */
  start() {
      this.intervalId = setInterval(this.checkTasks.bind(this), this.checkInterval);
  }

  /**
   * stop 方法停止调度任务。
   */
  stop() {
      if (this.intervalId) {
          clearInterval(this.intervalId);
      }
  }

  /**
   * checkTasks 方法检查并执行符合条件的任务。
   */
  private checkTasks() {
      this.tasks.forEach(task => {
          if (task.condition()) {
              task.animation.start();
          }
      });
  }
}

/**
* 使用示例：
* const scheduler = new AnimationScheduler(200);
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* scheduler.addTask(() => document.querySelector('#startButton')?.classList.contains('active'), anim);
* scheduler.start(); // 当 startButton 具有 active 类时启动动画
*/
