"use strict";
/**
* ResponsiveAnimation 类实现了响应式动画管理。
*/
var ResponsiveAnimation = /** @class */ (function () {
    function ResponsiveAnimation(element, options) {
        this.currentBreakpoint = null;
        this.breakpoints = options.breakpoints;
        this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
        this.resizeObserver.observe(element);
    }
    /**
     * handleResize 方法根据当前窗口大小选择适当的动画配置。
     * @param entries - 观察到的元素尺寸变化。
     */
    ResponsiveAnimation.prototype.handleResize = function (entries) {
        var entry = entries[0];
        var width = entry.contentRect.width;
        var selectedBreakpoint = null;
        if (width < 600) {
            selectedBreakpoint = 'small';
        }
        else if (width < 1200) {
            selectedBreakpoint = 'medium';
        }
        else {
            selectedBreakpoint = 'large';
        }
        if (selectedBreakpoint && selectedBreakpoint !== this.currentBreakpoint) {
            this.currentBreakpoint = selectedBreakpoint;
            this.breakpoints[selectedBreakpoint].start();
        }
    };
    return ResponsiveAnimation;
}());
/**
* 使用示例：
* const animSmall = new KeyframeAnimation(element, { duration: 500 });
* const animMedium = new KeyframeAnimation(element, { duration: 1000 });
* const animLarge = new KeyframeAnimation(element, { duration: 1500 });
* const responsiveAnim = new ResponsiveAnimation(element, { breakpoints: { small: animSmall, medium: animMedium, large: animLarge } });
* // 根据窗口尺寸自动选择并应用不同的动画
*/
