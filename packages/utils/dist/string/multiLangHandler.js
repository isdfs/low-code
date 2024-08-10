"use strict";
/**
 * @module MultiLangHandler
 * @description 提供字符串的多语言处理功能，支持根据用户的语言偏好自动选择正确的语言版本。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLangHandler = void 0;
var MultiLangHandler = /** @class */ (function () {
    function MultiLangHandler(languageData) {
        this.languageData = languageData;
    }
    /**
     * @description 根据用户的语言偏好获取对应的字符串
     * @param key 字符串的键
     * @param preferredLanguages 用户的首选语言列表，按优先级排序
     * @returns 对应语言的字符串，如果没有匹配，则返回键本身
     * @example
     * ```typescript
     * const languageData = {
     *   greeting: { 'en': 'Hello', 'fr': 'Bonjour', 'zh-CN': '你好' }
     * };
     * const handler = new MultiLangHandler(languageData);
     * const greeting = handler.getLocalizedString('greeting', ['fr', 'zh-CN']);
     * console.log(greeting); // 输出 "Bonjour"
     * ```
     */
    MultiLangHandler.prototype.getLocalizedString = function (key, preferredLanguages) {
        var strings = this.languageData[key];
        if (!strings) {
            return key;
        }
        for (var _i = 0, preferredLanguages_1 = preferredLanguages; _i < preferredLanguages_1.length; _i++) {
            var lang = preferredLanguages_1[_i];
            if (strings[lang]) {
                return strings[lang];
            }
        }
        return strings['en'] || key;
    };
    /**
     * @description 为指定语言添加或更新字符串
     * @param key 字符串的键
     * @param language 语言代码
     * @param value 对应语言的字符串
     * @example
     * ```typescript
     * handler.addOrUpdateString('farewell', 'es', 'Adiós');
     * const farewell = handler.getLocalizedString('farewell', ['es']);
     * console.log(farewell); // 输出 "Adiós"
     * ```
     */
    MultiLangHandler.prototype.addOrUpdateString = function (key, language, value) {
        if (!this.languageData[key]) {
            this.languageData[key] = {};
        }
        this.languageData[key][language] = value;
    };
    return MultiLangHandler;
}());
exports.MultiLangHandler = MultiLangHandler;
// 示例用法
/*
const languageData = {
    greeting: { 'en': 'Hello', 'fr': 'Bonjour', 'zh-CN': '你好' }
};
const handler = new MultiLangHandler(languageData);
const greeting = handler.getLocalizedString('greeting', ['fr', 'zh-CN']);
console.log('Greeting:', greeting); // 输出 "Bonjour"

handler.addOrUpdateString('farewell', 'es', 'Adiós');
const farewell = handler.getLocalizedString('farewell', ['es']);
console.log('Farewell:', farewell); // 输出 "Adiós"
*/
