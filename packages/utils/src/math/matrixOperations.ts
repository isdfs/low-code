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
export function multiplyMatrices(A: number[][], B: number[][]): number[][] {
  const aRows = A.length;
  const aCols = A[0].length;
  const bRows = B.length;
  const bCols = B[0].length;

  if (aCols !== bRows) {
    throw new Error('矩阵A的列数必须等于矩阵B的行数。');
  }

  const result: number[][] = Array.from({ length: aRows }, () => Array(bCols).fill(0));

  for (let i = 0; i < aRows; i++) {
    for (let j = 0; j < bCols; j++) {
      for (let k = 0; k < aCols; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}

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
export function transposeMatrix(matrix: number[][]): number[][] {
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

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
export function inverseMatrix(matrix: number[][]): number[][] {
  if (matrix.length !== 2 || matrix[0].length !== 2) {
    throw new Error('仅支持2x2矩阵的求逆。');
  }

  const [a, b] = matrix[0];
  const [c, d] = matrix[1];

  const determinant = a * d - b * c;

  if (determinant === 0) {
    throw new Error('矩阵不可逆。');
  }

  return [
    [d / determinant, -b / determinant],
    [-c / determinant, a / determinant]
  ];
}
