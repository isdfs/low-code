/**
 * GestureDrivenAnimationOptions 用于配置手势驱动动画的选项。
 * @param element - 要监听手势的目标元素。
 * @param onGesture - 手势触发时的回调函数。
 */
interface GestureDrivenAnimationOptions {
  element: HTMLElement;
  onGesture: (gesture: 'swipe' | 'pinch' | 'rotate', event: TouchEvent | MouseEvent) => void;
}

/**
* GestureDrivenAnimation 类实现了手势驱动动画。
*/
class GestureDrivenAnimation {
  private element: HTMLElement;
  private onGesture: (gesture: 'swipe' | 'pinch' | 'rotate', event: TouchEvent | MouseEvent) => void;

  constructor(options: GestureDrivenAnimationOptions) {
      this.element = options.element;
      this.onGesture = options.onGesture;
      this.init();
  }

  /**
   * init 方法初始化手势监听器。
   */
  private init() {
      let startX = 0;
      let startY = 0;
      let initialDistance = 0;

      const handleTouchStart = (event: TouchEvent) => {
          if (event.touches.length === 1) {
              startX = event.touches[0].clientX;
              startY = event.touches[0].clientY;
          } else if (event.touches.length === 2) {
              initialDistance = this.getDistance(event.touches);
          }
      };

      const handleTouchMove = (event: TouchEvent) => {
          if (event.touches.length === 1) {
              const dx = event.touches[0].clientX - startX;
              const dy = event.touches[0].clientY - startY;
              if (Math.abs(dx) > Math.abs(dy)) {
                  this.onGesture('swipe', event);
              }
          } else if (event.touches.length === 2) {
              const newDistance = this.getDistance(event.touches);
              if (newDistance > initialDistance) {
                  this.onGesture('pinch', event);
              } else {
                  this.onGesture('rotate', event);
              }
          }
      };

      this.element.addEventListener('touchstart', handleTouchStart);
      this.element.addEventListener('touchmove', handleTouchMove);
  }

  /**
   * getDistance 方法计算两个触摸点之间的距离。
   */
  private getDistance(touches: TouchList | any) {
      const [touch1, touch2] = touches;
      const dx = touch2.clientX - touch1.clientX;
      const dy = touch2.clientY - touch1.clientY;
      return Math.sqrt(dx * dx + dy * dy);
  }
}

/**
* 使用示例：
* const gestureAnim = new GestureDrivenAnimation({
*     element: myElement,
*     onGesture: (gesture, event) => {
*         if (gesture === 'swipe') {
*             myElement.style.transform = 'translateX(100px)';
*         } else if (gesture === 'pinch') {
*             myElement.style.transform = 'scale(1.2)';
*         } else if (gesture === 'rotate') {
*             myElement.style.transform = 'rotate(45deg)';
*         }
*     }
* });
* // 用户通过手势控制动画效果
*/
