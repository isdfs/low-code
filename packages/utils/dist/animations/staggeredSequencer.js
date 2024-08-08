"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staggeredSequencer = void 0;
/**
 * 分段执行动画序列，为每个动画增加延迟。
 *
 * @param {Array<() => Promise<void>>} animations - 包含一系列返回Promise的动画函数。
 * @param {number} delay - 每个动画之间的延迟时间（毫秒）。
 * @returns {Promise<void>} 返回一个Promise，表示所有动画执行完毕。
 *
 * @example
 * const fadeIn = () => new Promise(resolve => setTimeout(() => { console.log('Fade In'); resolve(); }, 1000));
 * const move = () => new Promise(resolve => setTimeout(() => { console.log('Move'); resolve(); }, 1000));
 * const fadeOut = () => new Promise(resolve => setTimeout(() => { console.log('Fade Out'); resolve(); }, 1000));
 * staggeredSequencer([fadeIn, move, fadeOut], 500).then(() => console.log('All animations done'));
 */
function staggeredSequencer(animations, delay) {
    return animations.reduce(function (promise, animation, index) {
        return promise.then(function () {
            return new Promise(function (resolve) { return setTimeout(resolve, delay * index); })
                .then(animation);
        });
    }, Promise.resolve());
}
exports.staggeredSequencer = staggeredSequencer;
