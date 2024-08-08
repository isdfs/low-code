"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeOut = void 0;
/**
 * 使元素淡出隐藏。
 *
 * @param {HTMLElement} element - 要淡出的元素。
 * @param {number} [duration=400] - 动画持续时间（毫秒）。
 *
 * @example
 * fadeOut(document.getElementById('myElement')!, 500);
 */
function fadeOut(element, duration) {
    if (duration === void 0) { duration = 400; }
    element.style.opacity = '1';
    var last = +new Date();
    var tick = function () {
        var opacity = parseFloat(element.style.opacity);
        var nextOpacity = opacity - (new Date().getTime() - last) / duration;
        element.style.opacity = nextOpacity.toString();
        last = +new Date();
        if (nextOpacity > 0) {
            requestAnimationFrame(tick);
        }
        else {
            element.style.display = 'none';
        }
    };
    tick();
}
exports.fadeOut = fadeOut;
