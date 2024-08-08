"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = void 0;
/**
 * 将字符串转换为 kebab-case（短横线连接的形式）。
 *
 * @param str - 要转换的字符串。
 * @returns 转换后的 kebab-case 字符串。
 */
function kebabCase(str) {
    var _a;
    return ((_a = str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]+|[0-9]+/g)) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.toLowerCase(); }).join('-')) || '';
}
exports.kebabCase = kebabCase;
