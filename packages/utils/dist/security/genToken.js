"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genToken = void 0;
/**
 * 生成一个随机字符串。
 * @param length - 生成的字符串长度，默认为16。
 * @returns 返回生成的随机字符串。
 */
function genToken(length) {
    if (length === void 0) { length = 16; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}
exports.genToken = genToken;
