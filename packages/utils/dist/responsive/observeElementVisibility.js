"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observeElementVisibility = void 0;
/**
 * 观察元素是否在视口内可见。
 * @param element - 要观察的HTML元素。
 * @param callback - 当元素可见时触发的回调函数。
 * @returns 返回一个解除观察的函数。
 */
function observeElementVisibility(element, callback) {
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                callback();
            }
        });
    });
    observer.observe(element);
    return function () {
        observer.unobserve(element);
    };
}
exports.observeElementVisibility = observeElementVisibility;
