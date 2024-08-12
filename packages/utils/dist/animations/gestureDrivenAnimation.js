"use strict";
/**
* GestureDrivenAnimation 类实现了手势驱动动画。
*/
var GestureDrivenAnimation = /** @class */ (function () {
    function GestureDrivenAnimation(options) {
        this.element = options.element;
        this.onGesture = options.onGesture;
        this.init();
    }
    /**
     * init 方法初始化手势监听器。
     */
    GestureDrivenAnimation.prototype.init = function () {
        var _this = this;
        var startX = 0;
        var startY = 0;
        var initialDistance = 0;
        var handleTouchStart = function (event) {
            if (event.touches.length === 1) {
                startX = event.touches[0].clientX;
                startY = event.touches[0].clientY;
            }
            else if (event.touches.length === 2) {
                initialDistance = _this.getDistance(event.touches);
            }
        };
        var handleTouchMove = function (event) {
            if (event.touches.length === 1) {
                var dx = event.touches[0].clientX - startX;
                var dy = event.touches[0].clientY - startY;
                if (Math.abs(dx) > Math.abs(dy)) {
                    _this.onGesture('swipe', event);
                }
            }
            else if (event.touches.length === 2) {
                var newDistance = _this.getDistance(event.touches);
                if (newDistance > initialDistance) {
                    _this.onGesture('pinch', event);
                }
                else {
                    _this.onGesture('rotate', event);
                }
            }
        };
        this.element.addEventListener('touchstart', handleTouchStart);
        this.element.addEventListener('touchmove', handleTouchMove);
    };
    /**
     * getDistance 方法计算两个触摸点之间的距离。
     */
    GestureDrivenAnimation.prototype.getDistance = function (touches) {
        var touch1 = touches[0], touch2 = touches[1];
        var dx = touch2.clientX - touch1.clientX;
        var dy = touch2.clientY - touch1.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return GestureDrivenAnimation;
}());
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
