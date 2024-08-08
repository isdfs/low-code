"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeIn = void 0;
/**
 * 使元素淡入显示。
 *
 * @param {HTMLElement} element - 要淡入的元素。
 * @param {number} [duration=400] - 动画持续时间（毫秒）。
 *
 * @example
 * fadeIn(document.getElementById('myElement')!, 500);
 */
function fadeIn(element, duration) {
    if (duration === void 0) { duration = 400; }
    element.style.opacity = '0';
    element.style.display = 'block';
    var last = +new Date();
    var tick = function () {
        var opacity = parseFloat(element.style.opacity);
        var nextOpacity = opacity + (new Date().getTime() - last) / duration;
        element.style.opacity = nextOpacity.toString();
        last = +new Date();
        if (nextOpacity < 1) {
            requestAnimationFrame(tick);
        }
    };
    tick();
}
exports.fadeIn = fadeIn;
