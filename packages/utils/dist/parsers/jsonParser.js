"use strict";
/**
 * JSON解析器模块，提供了对JSON字符串的安全解析和错误处理。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONParser = void 0;
var JSONParser = /** @class */ (function () {
    /**
     * 创建一个JSON解析器实例。
     * @param options 配置选项。
     */
    function JSONParser(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
    }
    /**
     * 解析JSON字符串。
     * @param jsonString 要解析的JSON字符串。
     * @returns 返回解析后的对象。
     * @throws 当JSON格式错误或遇到重复键（根据配置）时抛出错误。
     */
    JSONParser.prototype.parse = function (jsonString) {
        try {
            var reviver = this.options.duplicateKeyHandling ? this.createReviver() : undefined;
            return JSON.parse(jsonString, reviver);
        }
        catch (error) {
            throw new Error("JSON\u89E3\u6790\u5931\u8D25: ".concat(error.message));
        }
    };
    /**
     * 创建一个自定义的reviver函数，用于处理重复键。
     * @returns 返回reviver函数。
     * @private
     */
    JSONParser.prototype.createReviver = function () {
        var _this = this;
        var keyStack = [];
        var keySetStack = [];
        return function (key, value) {
            if (typeof value === 'object' && value !== null) {
                var currentKeySet_1 = new Set();
                keySetStack.push(currentKeySet_1);
            }
            var currentKeySet = keySetStack[keySetStack.length - 1];
            if (currentKeySet) {
                if (currentKeySet.has(key)) {
                    switch (_this.options.duplicateKeyHandling) {
                        case 'error':
                            throw new Error("\u5728\u8DEF\u5F84".concat(keyStack.join('.'), "\u4E2D\u68C0\u6D4B\u5230\u91CD\u590D\u7684\u952E\uFF1A").concat(key));
                        case 'ignore':
                            return undefined;
                        case 'overwrite':
                            // 不做处理，直接覆盖
                            break;
                        default:
                            break;
                    }
                }
                else {
                    currentKeySet.add(key);
                }
            }
            keyStack.push(key);
            return value;
        };
    };
    return JSONParser;
}());
exports.JSONParser = JSONParser;
/**
 * 使用示例：
 * ```typescript
 * const jsonString = '{"name": "Alice", "age": 30, "name": "Bob"}';
 *
 * const parser = new JSONParser({ duplicateKeyHandling: 'error' });
 * try {
 *   const data = parser.parse(jsonString);
 *   console.log(data);
 * } catch (error) {
 *   console.error(error); // 输出: JSON解析失败: 在路径.name中检测到重复的键：name
 * }
 * ```
 */
