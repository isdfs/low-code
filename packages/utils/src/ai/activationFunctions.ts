/**
 * 常用激活函数模块。
 */

/**
 * Sigmoid激活函数。
 * @param x 输入值。
 * @returns Sigmoid激活函数的结果。
 */
export function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

/**
 * Sigmoid激活函数的导数。
 * @param x 输入值。
 * @returns Sigmoid激活函数的导数值。
 */
export function sigmoidDerivative(x: number): number {
  const s = sigmoid(x);
  return s * (1 - s);
}

/**
 * ReLU激活函数。
 * @param x 输入值。
 * @returns ReLU激活函数的结果。
 */
export function relu(x: number): number {
  return Math.max(0, x);
}

/**
 * ReLU激活函数的导数。
 * @param x 输入值。
 * @returns ReLU激活函数的导数值。
 */
export function reluDerivative(x: number): number {
  return x > 0 ? 1 : 0;
}
