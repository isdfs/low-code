"use strict";
/**
* LayeredAnimation 类实现了多层动画系统。
*/
var LayeredAnimation = /** @class */ (function () {
    function LayeredAnimation(options) {
        this.layers = options.layers.map(function (layer) { return ({
            animation: layer.animation,
            syncWithPrevious: layer.syncWithPrevious || false,
        }); });
    }
    /**
     * start 方法启动多层动画系统，支持层间同步控制。
     */
    LayeredAnimation.prototype.start = function () {
        var _this = this;
        this.layers.forEach(function (layer, index) {
            if (layer.syncWithPrevious && index > 0) {
                var previousLayer = _this.layers[index - 1];
                _this.syncLayer(previousLayer.animation, layer.animation);
            }
            else {
                layer.animation.start();
            }
        });
    };
    /**
     * syncLayer 方法将两个层之间的动画进行同步。
     * @param previousAnimation - 前一层的动画。
     * @param currentAnimation - 当前层的动画。
     */
    LayeredAnimation.prototype.syncLayer = function (previousAnimation, currentAnimation) {
        previousAnimation.start();
        setTimeout(function () {
            currentAnimation.start();
        }, previousAnimation.options.duration); // 等待前一层动画完成
    };
    return LayeredAnimation;
}());
/**
* 使用示例：
* const layer1 = new KeyframeAnimation(element1, { duration: 500 });
* const layer2 = new KeyframeAnimation(element2, { duration: 800 });
* const layeredAnim = new LayeredAnimation({ layers: [{ animation: layer1 }, { animation: layer2, syncWithPrevious: true }] });
* layeredAnim.start();
*/
