/**
 * 使用CSS动画动画化指定的元素。
 *
 * @param {HTMLElement} element - 要动画化的元素。
 * @param {string} animationName - 动画名称（对应CSS类名）。
 * @param {number} [duration=1000] - 动画持续时间（毫秒）。
 * @returns {Promise<void>} 动画完成后的Promise。
 *
 * @example
 * animateElement(document.getElementById('myElement')!, 'bounce', 500).then(() => {
 *   console.log('Animation finished');
 * });
 */
export { animateElement } from './animateElement';
/**
 * 平滑滚动窗口或元素到目标位置。
 * @param targetPosition - 目标位置（滚动高度）。
 * @param duration - 动画持续时间（毫秒）。
 * @param element - 可选，默认是documentElement，要滚动的元素。
 */
export { animateScrollTo } from './animateScrollTo';
/**
 * 动画序列器，用于按顺序执行一组动画。
 *
 * @param {Array<() => Promise<void>>} animations - 包含一系列返回Promise的动画函数。
 * @returns {Promise<void>} 返回一个Promise，表示所有动画执行完毕。
 *
 * @example
 * const fadeIn = () => new Promise(resolve => setTimeout(() => { console.log('Fade In'); resolve(); }, 1000));
 * const move = () => new Promise(resolve => setTimeout(() => { console.log('Move'); resolve(); }, 1000));
 * const fadeOut = () => new Promise(resolve => setTimeout(() => { console.log('Fade Out'); resolve(); }, 1000));
 * sequencer([fadeIn, move, fadeOut]).then(() => console.log('All animations done'));
 */
export { sequencer } from './sequencer';
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
export { staggeredSequencer } from './staggeredSequencer';
