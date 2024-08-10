"use strict";
/**
 * @module StringEncoding
 * @description 提供字符串的编码与解码功能，支持 Base64、Hex、UTF-8 等常见编码格式的转换。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringEncoding = void 0;
var StringEncoding = /** @class */ (function () {
    function StringEncoding() {
    }
    /**
     * @description 将字符串编码为 Base64 格式
     * @param input 要编码的字符串
     * @returns 编码后的 Base64 字符串
     * @example
     * const base64Str = StringEncoding.encodeBase64('Hello, World!');
     * console.log('Base64:', base64Str); // 输出 "SGVsbG8sIFdvcmxkIQ=="
     */
    StringEncoding.encodeBase64 = function (input) {
        return btoa(input);
    };
    /**
     * @description 解码 Base64 格式的字符串
     * @param input 要解码的 Base64 字符串
     * @returns 解码后的原始字符串
     * @example
     * const originalStr = StringEncoding.decodeBase64('SGVsbG8sIFdvcmxkIQ==');
     * console.log('Original:', originalStr); // 输出 "Hello, World!"
     */
    StringEncoding.decodeBase64 = function (input) {
        return atob(input);
    };
    /**
     * @description 将字符串编码为十六进制（Hex）格式
     * @param input 要编码的字符串
     * @returns 编码后的 Hex 字符串
     * @example
     * const hexStr = StringEncoding.encodeHex('Hello');
     * console.log('Hex:', hexStr); // 输出 "48656c6c6f"
     */
    StringEncoding.encodeHex = function (input) {
        return Array.from(input)
            .map(function (char) { return char.charCodeAt(0).toString(16).padStart(2, '0'); })
            .join('');
    };
    /**
     * @description 解码十六进制（Hex）格式的字符串
     * @param input 要解码的 Hex 字符串
     * @returns 解码后的原始字符串
     * @example
     * const originalStr = StringEncoding.decodeHex('48656c6c6f');
     * console.log('Original:', originalStr); // 输出 "Hello"
     */
    StringEncoding.decodeHex = function (input) {
        var _a;
        return ((_a = input
            .match(/.{1,2}/g)) === null || _a === void 0 ? void 0 : _a.map(function (byte) { return String.fromCharCode(parseInt(byte, 16)); }).join('')) || '';
    };
    /**
     * @description 将字符串编码为 UTF-8 格式的字节数组
     * @param input 要编码的字符串
     * @returns 编码后的 Uint8Array 字节数组
     * @example
     * const utf8Bytes = StringEncoding.encodeUtf8('Hello');
     * console.log('UTF-8 Bytes:', utf8Bytes); // 输出 Uint8Array(5) [ 72, 101, 108, 108, 111 ]
     */
    StringEncoding.encodeUtf8 = function (input) {
        return new TextEncoder().encode(input);
    };
    /**
     * @description 将 UTF-8 格式的字节数组解码为字符串
     * @param input 要解码的 Uint8Array 字节数组
     * @returns 解码后的原始字符串
     * @example
     * const originalStr = StringEncoding.decodeUtf8(new Uint8Array([72, 101, 108, 108, 111]));
     * console.log('Original:', originalStr); // 输出 "Hello"
     */
    StringEncoding.decodeUtf8 = function (input) {
        return new TextDecoder().decode(input);
    };
    return StringEncoding;
}());
exports.StringEncoding = StringEncoding;
// 示例用法
/*
const base64Str = StringEncoding.encodeBase64('Hello, World!');
console.log('Base64:', base64Str); // 输出 "SGVsbG8sIFdvcmxkIQ=="

const originalStr = StringEncoding.decodeBase64(base64Str);
console.log('Original:', originalStr); // 输出 "Hello, World!"

const hexStr = StringEncoding.encodeHex('Hello');
console.log('Hex:', hexStr); // 输出 "48656c6c6f"

const decodedHexStr = StringEncoding.decodeHex(hexStr);
console.log('Decoded Hex:', decodedHexStr); // 输出 "Hello"

const utf8Bytes = StringEncoding.encodeUtf8('Hello');
console.log('UTF-8 Bytes:', utf8Bytes); // 输出 Uint8Array(5) [ 72, 101, 108, 108, 111 ]

const originalUtf8Str = StringEncoding.decodeUtf8(utf8Bytes);
console.log('Original UTF-8:', originalUtf8Str); // 输出 "Hello"
*/
