"use strict";
/**
 * 常用激活函数模块。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reluDerivative = exports.relu = exports.sigmoidDerivative = exports.sigmoid = void 0;
/**
 * Sigmoid激活函数。
 * @param x 输入值。
 * @returns Sigmoid激活函数的结果。
 */
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
exports.sigmoid = sigmoid;
/**
 * Sigmoid激活函数的导数。
 * @param x 输入值。
 * @returns Sigmoid激活函数的导数值。
 */
function sigmoidDerivative(x) {
    var s = sigmoid(x);
    return s * (1 - s);
}
exports.sigmoidDerivative = sigmoidDerivative;
/**
 * ReLU激活函数。
 * @param x 输入值。
 * @returns ReLU激活函数的结果。
 */
function relu(x) {
    return Math.max(0, x);
}
exports.relu = relu;
/**
 * ReLU激活函数的导数。
 * @param x 输入值。
 * @returns ReLU激活函数的导数值。
 */
function reluDerivative(x) {
    return x > 0 ? 1 : 0;
}
exports.reluDerivative = reluDerivative;
