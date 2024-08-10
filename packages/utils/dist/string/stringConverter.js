"use strict";
/**
 * @module StringConverter
 * @description 提供字符串与常用数据结构之间的转换功能，支持 JSON、XML、YAML 等格式的转换与解析。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringConverter = void 0;
var StringConverter = /** @class */ (function () {
    function StringConverter() {
    }
    /**
     * @description 将对象转换为 JSON 字符串
     * @param obj 要转换的对象
     * @returns JSON 字符串
     * @example
     * ```typescript
     * const jsonString = StringConverter.objectToJson({ name: 'Alice', age: 30 });
     * console.log(jsonString); // 输出 '{"name":"Alice","age":30}'
     * ```
     */
    StringConverter.objectToJson = function (obj) {
        return JSON.stringify(obj);
    };
    /**
     * @description 将 JSON 字符串解析为对象
     * @param jsonString 要解析的 JSON 字符串
     * @returns 解析后的对象
     * @example
     * ```typescript
     * const obj = StringConverter.jsonToObject('{"name":"Alice","age":30}');
     * console.log(obj); // 输出 { name: 'Alice', age: 30 }
     * ```
     */
    StringConverter.jsonToObject = function (jsonString) {
        return JSON.parse(jsonString);
    };
    /**
     * @description 将对象转换为 XML 字符串
     * @param obj 要转换的对象
     * @returns XML 字符串
     * @example
     * ```typescript
     * const xmlString = StringConverter.objectToXml({ name: 'Alice', age: 30 });
     * console.log(xmlString); // 输出 '<root><name>Alice</name><age>30</age></root>'
     * ```
     */
    StringConverter.objectToXml = function (obj) {
        var toXml = function (v, tagName) {
            if (typeof v === 'object' && v !== null) {
                return "<".concat(tagName, ">").concat(Object.entries(v).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return toXml(value, key);
                }).join(''), "</").concat(tagName, ">");
            }
            return "<".concat(tagName, ">").concat(v, "</").concat(tagName, ">");
        };
        return "<root>".concat(Object.entries(obj).map(function (_a) {
            var key = _a[0], value = _a[1];
            return toXml(value, key);
        }).join(''), "</root>");
    };
    /**
     * @description 将 XML 字符串解析为对象
     * @param xmlString 要解析的 XML 字符串
     * @returns 解析后的对象
     * @example
     * ```typescript
     * const obj = StringConverter.xmlToObject('<root><name>Alice</name><age>30</age></root>');
     * console.log(obj); // 输出 { name: 'Alice', age: 30 }
     * ```
     */
    StringConverter.xmlToObject = function (xmlString) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xmlString, 'application/xml');
        var parseNode = function (node) {
            var obj = {};
            for (var i = 0; i < node.children.length; i++) {
                var child = node.children[i];
                var childName = child.nodeName;
                if (child.children.length > 0) {
                    obj[childName] = parseNode(child);
                }
                else {
                    obj[childName] = child.textContent;
                }
            }
            return obj;
        };
        return parseNode(xmlDoc.documentElement);
    };
    /**
     * @description 将对象转换为 YAML 字符串
     * @param obj 要转换的对象
     * @returns YAML 字符串
     * @example
     * ```typescript
     * const yamlString = StringConverter.objectToYaml({ name: 'Alice', age: 30 });
     * console.log(yamlString); // 输出 'name: Alice\nage: 30\n'
     * ```
     */
    StringConverter.objectToYaml = function (obj) {
        var yamlify = function (v, indent) {
            if (indent === void 0) { indent = ''; }
            if (typeof v === 'object' && v !== null) {
                return Object.entries(v).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return "".concat(indent).concat(key, ": ").concat(yamlify(value, indent + '  '));
                }).join('\n');
            }
            return String(v);
        };
        return yamlify(obj);
    };
    /**
     * @description 将 YAML 字符串解析为对象
     * @param yamlString 要解析的 YAML 字符串
     * @returns 解析后的对象
     * @example
     * ```typescript
     * const obj = StringConverter.yamlToObject('name: Alice\nage: 30\n');
     * console.log(obj); // 输出 { name: 'Alice', age: 30 }
     * ```
     */
    StringConverter.yamlToObject = function (yamlString) {
        var lines = yamlString.split('\n');
        var result = {};
        var currentObj = result;
        var indentStack = [];
        lines.forEach(function (line) {
            if (line.trim() === '')
                return;
            var match = line.match(/^(\s*)([^:]+):\s*(.*)?$/);
            if (!match)
                return;
            var indent = match[1], key = match[2], value = match[3];
            while (indentStack.length > 0 && indentStack[indentStack.length - 1].indent.length >= indent.length) {
                indentStack.pop();
            }
            if (indentStack.length === 0) {
                currentObj = result;
            }
            else {
                currentObj = indentStack[indentStack.length - 1].obj;
            }
            if (value) {
                currentObj[key] = value;
            }
            else {
                currentObj[key] = {};
                indentStack.push({ indent: indent, obj: currentObj[key] });
            }
        });
        return result;
    };
    return StringConverter;
}());
exports.StringConverter = StringConverter;
