"use strict";
/**
 * @module StringStream
 * @description 提供字符串数据流的处理功能，支持大文本的分块处理、数据流的拼接与解析。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringStream = void 0;
var StringStream = /** @class */ (function () {
    function StringStream() {
    }
    /**
     * @description 将大文本分块处理，避免内存占用过多
     * @param input 大文本字符串
     * @param chunkSize 每块的大小（字节数）
     * @param callback 处理每块数据的回调函数
     * @example
     * StringStream.processInChunks('Very large text...', 1024, chunk => {
     *   console.log('Chunk:', chunk);
     * });
     */
    StringStream.processInChunks = function (input, chunkSize, callback) {
        for (var i = 0; i < input.length; i += chunkSize) {
            var chunk = input.slice(i, i + chunkSize);
            callback(chunk);
        }
    };
    /**
     * @description 将字符串数组拼接成一个完整的数据流
     * @param chunks 字符串数组
     * @returns 拼接后的完整字符串
     * @example
     * const completeText = StringStream.concatenateChunks(['Hello', ' ', 'World']);
     * console.log('Complete Text:', completeText); // 输出 "Hello World"
     */
    StringStream.concatenateChunks = function (chunks) {
        return chunks.join('');
    };
    /**
     * @description 解析数据流，根据指定的分隔符分割成多个数据块
     * @param input 输入的数据流
     * @param delimiter 分隔符
     * @returns 分割后的字符串数组
     * @example
     * const chunks = StringStream.splitStream('Part1|Part2|Part3', '|');
     * console.log('Chunks:', chunks); // 输出 ["Part1", "Part2", "Part3"]
     */
    StringStream.splitStream = function (input, delimiter) {
        return input.split(delimiter);
    };
    return StringStream;
}());
exports.StringStream = StringStream;
// 示例用法
/*
StringStream.processInChunks('Very large text...', 1024, chunk => {
  console.log('Chunk:', chunk);
});

const completeText = StringStream.concatenateChunks(['Hello', ' ', 'World']);
console.log('Complete Text:', completeText); // 输出 "Hello World"

const chunks = StringStream.splitStream('Part1|Part2|Part3', '|');
console.log('Chunks:', chunks); // 输出 ["Part1", "Part2", "Part3"]
*/
