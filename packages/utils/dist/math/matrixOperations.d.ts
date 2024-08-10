/**
 * 矩阵运算模块，提供常用的矩阵操作方法。
 */
/**
 * @function multiplyMatrices
 * 矩阵乘法函数。
 * @param A 左矩阵，二维数组表示。
 * @param B 右矩阵，二维数组表示。
 * @returns 返回矩阵A和B的乘积矩阵，若两矩阵不可相乘则抛出错误。
 *
 * @example
 * ```typescript
 * const A = [
 *   [1, 2],
 *   [3, 4]
 * ];
 * const B = [
 *   [5, 6],
 *   [7, 8]
 * ];
 * const C = multiplyMatrices(A, B);
 * console.log(C); // 输出: [[19, 22], [43, 50]]
 * ```
 */
export declare function multiplyMatrices(A: number[][], B: number[][]): number[][];
/**
 * @function transposeMatrix
 * 矩阵转置函数。
 * @param matrix 要转置的矩阵，二维数组表示。
 * @returns 返回转置后的矩阵。
 *
 * @example
 * ```typescript
 * const matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ];
 * const transposed = transposeMatrix(matrix);
 * console.log(transposed); // 输出: [[1, 4], [2, 5], [3, 6]]
 * ```
 */
export declare function transposeMatrix(matrix: number[][]): number[][];
/**
 * @function inverseMatrix
 * 矩阵求逆函数，仅适用于2x2矩阵。
 * @param matrix 要求逆的2x2矩阵。
 * @returns 返回矩阵的逆矩阵，如果矩阵不可逆则抛出错误。
 *
 * @example
 * ```typescript
 * const matrix = [
 *   [4, 7],
 *   [2, 6]
 * ];
 * const inverse = inverseMatrix(matrix);
 * console.log(inverse); // 输出: [[0.6, -0.7], [-0.2, 0.4]]
 * ```
 */
export declare function inverseMatrix(matrix: number[][]): number[][];
