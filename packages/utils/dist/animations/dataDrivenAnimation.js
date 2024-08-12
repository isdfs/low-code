"use strict";
/**
* DataDrivenAnimation 类实现了数据驱动动画。
*/
var DataDrivenAnimation = /** @class */ (function () {
    function DataDrivenAnimation(element, options) {
        this.intervalId = null;
        this.element = element;
        this.options = options;
    }
    /**
     * start 方法开始数据驱动的动画。
     */
    DataDrivenAnimation.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            var data = typeof _this.options.dataSource === 'function'
                ? _this.options.dataSource()
                : _this.options.dataSource.shift();
            if (data) {
                _this.options.mapDataToAnimation(data, _this.element);
            }
            if (Array.isArray(_this.options.dataSource) && _this.options.dataSource.length === 0) {
                _this.stop();
            }
        }, this.options.updateInterval || 1000);
    };
    /**
     * stop 方法停止数据驱动的动画。
     */
    DataDrivenAnimation.prototype.stop = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    return DataDrivenAnimation;
}());
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
