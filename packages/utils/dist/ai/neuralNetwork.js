"use strict";
/**
 * 简单的前馈神经网络实现。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuralNetwork = void 0;
var activationFunctions_1 = require("./activationFunctions");
/**
 * @class NeuralNetwork
 * 前馈神经网络类，支持训练和预测。
 */
var NeuralNetwork = /** @class */ (function () {
    function NeuralNetwork(inputLayerSize, hiddenLayerSize, outputLayerSize, learningRate) {
        if (learningRate === void 0) { learningRate = 0.1; }
        var _this = this;
        this.inputLayerSize = inputLayerSize;
        this.hiddenLayerSize = hiddenLayerSize;
        this.outputLayerSize = outputLayerSize;
        this.learningRate = learningRate;
        // 初始化权重为随机值
        this.weights1 = Array.from({ length: this.inputLayerSize }, function () {
            return Array.from({ length: _this.hiddenLayerSize }, function () { return Math.random(); });
        });
        this.weights2 = Array.from({ length: this.hiddenLayerSize }, function () {
            return Array.from({ length: _this.outputLayerSize }, function () { return Math.random(); });
        });
    }
    /**
     * 前向传播计算输出。
     * @param input 输入数据，长度应与输入层大小一致。
     * @returns 输出层的结果。
     */
    NeuralNetwork.prototype.forward = function (input) {
        var hidden = this.sigmoid(this.dot(input, this.weights1));
        var output = this.sigmoid(this.dot(hidden, this.weights2));
        return output;
    };
    /**
     * 训练网络。
     * @param input 输入数据，二维数组，行数为样本数，列数为输入层大小。
     * @param target 目标数据，二维数组，行数为样本数，列数为输出层大小。
     * @param epochs 训练的轮数。
     */
    NeuralNetwork.prototype.train = function (input, target, epochs) {
        if (epochs === void 0) { epochs = 10000; }
        for (var epoch = 0; epoch < epochs; epoch++) {
            var _loop_1 = function (i) {
                var x = input[i];
                var y = target[i];
                // 前向传播
                var hidden = this_1.sigmoid(this_1.dot(x, this_1.weights1));
                var output = this_1.sigmoid(this_1.dot(hidden, this_1.weights2));
                // 计算误差
                var outputError = y.map(function (t, j) { return t - output[j]; });
                var hiddenError = this_1.dotTranspose(outputError, this_1.weights2);
                // 反向传播调整权重
                var outputDelta = outputError.map(function (e, j) { return e * (0, activationFunctions_1.sigmoidDerivative)(output[j]); });
                this_1.weights2 = this_1.adjustWeights(this_1.weights2, hidden, outputDelta);
                var hiddenDelta = hiddenError.map(function (e, j) { return e * (0, activationFunctions_1.sigmoidDerivative)(hidden[j]); });
                this_1.weights1 = this_1.adjustWeights(this_1.weights1, x, hiddenDelta);
            };
            var this_1 = this;
            for (var i = 0; i < input.length; i++) {
                _loop_1(i);
            }
        }
    };
    /**
     * 预测新数据的输出。
     * @param input 输入数据，长度应与输入层大小一致。
     * @returns 预测的输出值。
     */
    NeuralNetwork.prototype.predict = function (input) {
        return this.forward(input);
    };
    NeuralNetwork.prototype.dot = function (a, b) {
        return b[0].map(function (_, colIndex) { return a.reduce(function (sum, ai, rowIndex) { return sum + ai * b[rowIndex][colIndex]; }, 0); });
    };
    NeuralNetwork.prototype.dotTranspose = function (a, b) {
        return b.map(function (row) { return row.reduce(function (sum, bi, j) { return sum + bi * a[j]; }, 0); });
    };
    NeuralNetwork.prototype.adjustWeights = function (weights, input, delta) {
        var _this = this;
        return weights.map(function (row, i) { return row.map(function (w, j) { return w + _this.learningRate * delta[j] * input[i]; }); });
    };
    NeuralNetwork.prototype.sigmoid = function (x) {
        return x.map(activationFunctions_1.sigmoid);
    };
    return NeuralNetwork;
}());
exports.NeuralNetwork = NeuralNetwork;
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
