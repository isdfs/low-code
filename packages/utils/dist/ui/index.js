"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeOut = exports.fadeIn = void 0;
/**
 * 使元素淡入显示。
 *
 * @param {HTMLElement} element - 要淡入的元素。
 * @param {number} [duration=400] - 动画持续时间（毫秒）。
 *
 * @example
 * fadeIn(document.getElementById('myElement')!, 500);
 */
var fadeIn_1 = require("./fadeIn");
Object.defineProperty(exports, "fadeIn", { enumerable: true, get: function () { return fadeIn_1.fadeIn; } });
/**
 * 使元素淡出隐藏。
 *
 * @param {HTMLElement} element - 要淡出的元素。
 * @param {number} [duration=400] - 动画持续时间（毫秒）。
 *
 * @example
 * fadeOut(document.getElementById('myElement')!, 500);
 */
var fadeOut_1 = require("./fadeOut");
Object.defineProperty(exports, "fadeOut", { enumerable: true, get: function () { return fadeOut_1.fadeOut; } });
