"use strict";
/**
* ProgressiveReveal 类实现了渐进式显示动画。
*/
var ProgressiveReveal = /** @class */ (function () {
    function ProgressiveReveal(elements, options) {
        this.elements = elements;
        this.options = options;
    }
    /**
     * start 方法开始渐进式显示动画。
     */
    ProgressiveReveal.prototype.start = function () {
        var _this = this;
        this.elements.forEach(function (element, index) {
            setTimeout(function () {
                _this.revealElement(element);
            }, index * _this.options.interval);
        });
    };
    /**
     * revealElement 方法显示单个元素，应用渐进式效果。
     * @param element - 要显示的元素。
     */
    ProgressiveReveal.prototype.revealElement = function (element) {
        element.style.transition = "opacity ".concat(this.options.duration, "ms ease");
        element.style.opacity = '1';
    };
    return ProgressiveReveal;
}());
/**
* 使用示例：
* const elements = Array.from(document.querySelectorAll('.reveal-item')) as HTMLElement[];
* const reveal = new ProgressiveReveal(elements, { duration: 500, interval: 300 });
* reveal.start(); // 按顺序逐步显示每个元素
*/
