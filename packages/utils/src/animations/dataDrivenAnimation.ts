/**
 * DataDrivenAnimationOptions 用于配置数据驱动动画的选项。
 * @param dataSource - 数据源，可以是数组、实时数据流或回调函数。
 * @param mapDataToAnimation - 将数据映射到动画属性的函数。
 * @param updateInterval - 数据更新的间隔时间（毫秒）。
 */
interface DataDrivenAnimationOptions<T> {
  dataSource: T[] | (() => T);
  mapDataToAnimation: (data: T, element: HTMLElement) => void;
  updateInterval?: number;
}

/**
* DataDrivenAnimation 类实现了数据驱动动画。
*/
class DataDrivenAnimation<T> {
  private element: HTMLElement;
  private options: DataDrivenAnimationOptions<T>;
  private intervalId: number | null = null;

  constructor(element: HTMLElement, options: DataDrivenAnimationOptions<T>) {
      this.element = element;
      this.options = options;
  }

  /**
   * start 方法开始数据驱动的动画。
   */
  start() {
      this.intervalId = setInterval(() => {
          const data = typeof this.options.dataSource === 'function'
              ? (this.options.dataSource as () => T)()
              : this.options.dataSource.shift();

          if (data) {
              this.options.mapDataToAnimation(data, this.element);
          }

          if (Array.isArray(this.options.dataSource) && this.options.dataSource.length === 0) {
              this.stop();
          }
      }, this.options.updateInterval || 1000);
  }

  /**
   * stop 方法停止数据驱动的动画。
   */
  stop() {
      if (this.intervalId) {
          clearInterval(this.intervalId);
      }
  }
}

/**
* 使用示例：
* const dataSource = [10, 20, 30, 40, 50];
* const dataAnim = new DataDrivenAnimation(myElement, {
*     dataSource,
*     mapDataToAnimation: (data, element) => {
*         element.style.transform = `scale(${data / 50})`;
*     },
*     updateInterval: 500
* });
* dataAnim.start(); // 启动数据驱动的动画
*/
