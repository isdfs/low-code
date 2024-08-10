"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
* ParallaxEffect 类实现了一个视差滚动效果系统。
*/
var ParallaxEffect = /** @class */ (function () {
    function ParallaxEffect(element, options) {
        this.element = element;
        this.options = __assign({ axis: 'y' }, options);
        this.init();
    }
    /**
     * init 方法用于初始化视差效果，绑定滚动事件。
     */
    ParallaxEffect.prototype.init = function () {
        window.addEventListener('scroll', this.applyEffect.bind(this));
    };
    /**
     * applyEffect 方法在滚动时应用视差效果。
     */
    ParallaxEffect.prototype.applyEffect = function () {
        var scrollPos = window.scrollY;
        var moveDistance = scrollPos * this.options.speed;
        if (this.options.axis === 'y') {
            this.element.style.transform = "translateY(".concat(moveDistance, "px)");
        }
        else {
            this.element.style.transform = "translateX(".concat(moveDistance, "px)");
        }
    };
    return ParallaxEffect;
}());
/**
* 使用示例：
* const parallax = new ParallaxEffect(myBackgroundElement, { speed: 0.5 });
* // 该示例将根据页面的滚动位置，移动元素以创建视差效果。
*/
