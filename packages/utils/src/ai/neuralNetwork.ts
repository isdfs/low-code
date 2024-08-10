/**
 * 简单的前馈神经网络实现。
 */

import { sigmoid, sigmoidDerivative } from './activationFunctions';

/**
 * @class NeuralNetwork
 * 前馈神经网络类，支持训练和预测。
 */
export class NeuralNetwork {
  private inputLayerSize: number;
  private hiddenLayerSize: number;
  private outputLayerSize: number;
  private learningRate: number;
  private weights1: number[][];
  private weights2: number[][];

  constructor(inputLayerSize: number, hiddenLayerSize: number, outputLayerSize: number, learningRate: number = 0.1) {
    this.inputLayerSize = inputLayerSize;
    this.hiddenLayerSize = hiddenLayerSize;
    this.outputLayerSize = outputLayerSize;
    this.learningRate = learningRate;

    // 初始化权重为随机值
    this.weights1 = Array.from({ length: this.inputLayerSize }, () =>
      Array.from({ length: this.hiddenLayerSize }, () => Math.random())
    );
    this.weights2 = Array.from({ length: this.hiddenLayerSize }, () =>
      Array.from({ length: this.outputLayerSize }, () => Math.random())
    );
  }

  /**
   * 前向传播计算输出。
   * @param input 输入数据，长度应与输入层大小一致。
   * @returns 输出层的结果。
   */
  private forward(input: number[]): number[] {
    const hidden = this.sigmoid(this.dot(input, this.weights1));
    const output = this.sigmoid(this.dot(hidden, this.weights2));
    return output;
  }

  /**
   * 训练网络。
   * @param input 输入数据，二维数组，行数为样本数，列数为输入层大小。
   * @param target 目标数据，二维数组，行数为样本数，列数为输出层大小。
   * @param epochs 训练的轮数。
   */
  train(input: number[][], target: number[][], epochs: number = 10000): void {
    for (let epoch = 0; epoch < epochs; epoch++) {
      for (let i = 0; i < input.length; i++) {
        const x = input[i];
        const y = target[i];

        // 前向传播
        const hidden = this.sigmoid(this.dot(x, this.weights1));
        const output = this.sigmoid(this.dot(hidden, this.weights2));

        // 计算误差
        const outputError = y.map((t, j) => t - output[j]);
        const hiddenError = this.dotTranspose(outputError, this.weights2);

        // 反向传播调整权重
        const outputDelta = outputError.map((e, j) => e * sigmoidDerivative(output[j]));
        this.weights2 = this.adjustWeights(this.weights2, hidden, outputDelta);

        const hiddenDelta = hiddenError.map((e, j) => e * sigmoidDerivative(hidden[j]));
        this.weights1 = this.adjustWeights(this.weights1, x, hiddenDelta);
      }
    }
  }

  /**
   * 预测新数据的输出。
   * @param input 输入数据，长度应与输入层大小一致。
   * @returns 预测的输出值。
   */
  predict(input: number[]): number[] {
    return this.forward(input);
  }

  private dot(a: number[], b: number[][]): number[] {
    return b[0].map((_, colIndex) => a.reduce((sum, ai, rowIndex) => sum + ai * b[rowIndex][colIndex], 0));
  }

  private dotTranspose(a: number[], b: number[][]): number[] {
    return b.map(row => row.reduce((sum, bi, j) => sum + bi * a[j], 0));
  }

  private adjustWeights(weights: number[][], input: number[], delta: number[]): number[][] {
    return weights.map((row, i) => row.map((w, j) => w + this.learningRate * delta[j] * input[i]));
  }

  private sigmoid(x: number[]): number[] {
    return x.map(sigmoid);
  }
}

/**
 * 使用示例：
 * ```typescript
 * const nn = new NeuralNetwork(2, 2, 1);
 * const input = [
 *   [0, 0],
 *   [0, 1],
 *   [1, 0],
 *   [1, 1]
 * ];
 * const target = [
 *   [0],
 *   [1],
 *   [1],
 *   [0]
 * ];
 * nn.train(input, target, 10000);
 * const output = nn.predict([1, 0]);
 * console.log(output); // 预测结果接近1
 * ```
 */
