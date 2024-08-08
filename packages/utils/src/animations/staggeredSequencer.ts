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
export function staggeredSequencer(animations: Array<() => Promise<void>>, delay: number): Promise<void> {
  return animations.reduce((promise, animation, index) => {
      return promise.then(() => 
          new Promise(resolve => setTimeout(resolve, delay * index))
          .then(animation)
      );
  }, Promise.resolve());
}
