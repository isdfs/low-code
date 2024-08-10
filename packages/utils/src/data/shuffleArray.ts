/**
 * 打乱数组的顺序，返回一个新的数组。
 * @param array - 要打乱的数组。
 * @returns 返回打乱顺序后的新数组。
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
