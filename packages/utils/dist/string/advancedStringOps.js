"use strict";
/**
 * @module AdvancedStringOps
 * @description 提供更高级的字符串操作功能，包括多模式匹配、字符串分组、异步字符串处理等。
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncProcess = exports.groupBySize = exports.multiMatch = void 0;
/**
 * @description 多模式字符串匹配，返回所有匹配的字符串及其位置
 * @param input 要匹配的字符串
 * @param patterns 匹配模式的数组，可以是正则表达式或字符串
 * @returns 包含匹配结果的数组，每个元素包含匹配的字符串及其起始位置
 * @example
 * ```typescript
 * const result = AdvancedStringOps.multiMatch('abc123def456', [/abc/, /\d+/]);
 * console.log(result); // 输出 [{ match: 'abc', index: 0 }, { match: '123', index: 3 }, { match: '456', index: 9 }]
 * ```
 */
function multiMatch(input, patterns) {
    var results = [];
    patterns.forEach(function (pattern) {
        var regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, 'g');
        var match;
        while ((match = regex.exec(input)) !== null) {
            results.push({ match: match[0], index: match.index });
        }
    });
    return results;
}
exports.multiMatch = multiMatch;
/**
 * @description 将字符串按指定长度分组
 * @param input 要分组的字符串
 * @param size 每组的长度
 * @returns 分组后的字符串数组
 * @example
 * ```typescript
 * const result = AdvancedStringOps.groupBySize('abcdefgh', 3);
 * console.log(result); // 输出 ['abc', 'def', 'gh']
 * ```
 */
function groupBySize(input, size) {
    var result = [];
    for (var i = 0; i < input.length; i += size) {
        result.push(input.substr(i, size));
    }
    return result;
}
exports.groupBySize = groupBySize;
/**
 * @description 异步逐字符处理字符串
 * @param input 要处理的字符串
 * @param callback 处理每个字符的异步函数
 * @returns 处理后的字符串
 * @example
 * ```typescript
 * const result = await AdvancedStringOps.asyncProcess('hello', async (char) => {
 *   return char.toUpperCase();
 * });
 * console.log(result); // 输出 "HELLO"
 * ```
 */
function asyncProcess(input, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _i, input_1, char, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    result = [];
                    _i = 0, input_1 = input;
                    _c.label = 1;
                case 1:
                    if (!(_i < input_1.length)) return [3 /*break*/, 4];
                    char = input_1[_i];
                    _b = (_a = result).push;
                    return [4 /*yield*/, callback(char)];
                case 2:
                    _b.apply(_a, [_c.sent()]);
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, result.join('')];
            }
        });
    });
}
exports.asyncProcess = asyncProcess;
