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
export function sequencer(animations: Array<() => Promise<void>>): Promise<void> {
  return animations.reduce((promise, animation) => {
      return promise.then(() => animation());
  }, Promise.resolve());
}
