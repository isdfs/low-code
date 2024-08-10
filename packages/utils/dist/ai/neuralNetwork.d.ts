/**
 * 简单的前馈神经网络实现。
 */
/**
 * @class NeuralNetwork
 * 前馈神经网络类，支持训练和预测。
 */
export declare class NeuralNetwork {
    private inputLayerSize;
    private hiddenLayerSize;
    private outputLayerSize;
    private learningRate;
    private weights1;
    private weights2;
    constructor(inputLayerSize: number, hiddenLayerSize: number, outputLayerSize: number, learningRate?: number);
    /**
     * 前向传播计算输出。
     * @param input 输入数据，长度应与输入层大小一致。
     * @returns 输出层的结果。
     */
    private forward;
    /**
     * 训练网络。
     * @param input 输入数据，二维数组，行数为样本数，列数为输入层大小。
     * @param target 目标数据，二维数组，行数为样本数，列数为输出层大小。
     * @param epochs 训练的轮数。
     */
    train(input: number[][], target: number[][], epochs?: number): void;
    /**
     * 预测新数据的输出。
     * @param input 输入数据，长度应与输入层大小一致。
     * @returns 预测的输出值。
     */
    predict(input: number[]): number[];
    private dot;
    private dotTranspose;
    private adjustWeights;
    private sigmoid;
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
