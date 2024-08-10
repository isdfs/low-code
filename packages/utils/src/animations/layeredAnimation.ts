/**
 * LayeredAnimationOptions 用于配置多层动画的选项。
 * @param layers - 各层动画的配置，每层包含一个 KeyframeAnimation 实例和一个可选的层次同步标志。
 */
interface LayeredAnimationOptions {
  layers: { animation: KeyframeAnimation; syncWithPrevious?: boolean }[];
}

/**
* LayeredAnimation 类实现了多层动画系统。
*/
class LayeredAnimation {
  private layers: { animation: KeyframeAnimation; syncWithPrevious: boolean }[];

  constructor(options: LayeredAnimationOptions) {
      this.layers = options.layers.map(layer => ({
          animation: layer.animation,
          syncWithPrevious: layer.syncWithPrevious || false,
      }));
  }

  /**
   * start 方法启动多层动画系统，支持层间同步控制。
   */
  start() {
      this.layers.forEach((layer, index) => {
          if (layer.syncWithPrevious && index > 0) {
              const previousLayer = this.layers[index - 1];
              this.syncLayer(previousLayer.animation, layer.animation);
          } else {
              layer.animation.start();
          }
      });
  }

  /**
   * syncLayer 方法将两个层之间的动画进行同步。
   * @param previousAnimation - 前一层的动画。
   * @param currentAnimation - 当前层的动画。
   */
  private syncLayer(previousAnimation: KeyframeAnimation | any, currentAnimation: KeyframeAnimation) {
      previousAnimation.start();
      setTimeout(() => {
          currentAnimation.start();
      }, previousAnimation.options.duration); // 等待前一层动画完成
  }
}

/**
* 使用示例：
* const layer1 = new KeyframeAnimation(element1, { duration: 500 });
* const layer2 = new KeyframeAnimation(element2, { duration: 800 });
* const layeredAnim = new LayeredAnimation({ layers: [{ animation: layer1 }, { animation: layer2, syncWithPrevious: true }] });
* layeredAnim.start();
*/
