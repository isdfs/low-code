/**
 * 限制数字在指定的范围内。
 * 
 * @param value - 要限制的数字。
 * @param min - 最小值。
 * @param max - 最大值。
 * @returns 被限制在范围内的数字。
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
