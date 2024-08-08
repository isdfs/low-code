/**
 * 随机打乱数组的顺序。
 *
 * @param {T[]} array - 要打乱顺序的数组。
 * @returns {T[]} 打乱顺序后的新数组。
 *
 * @example
 * const shuffledArray = shuffle([1, 2, 3, 4, 5]);
 * console.log(shuffledArray); // [3, 5, 1, 4, 2]（示例，顺序随机）
 */
export function shuffle<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
