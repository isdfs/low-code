"use strict";
/**
 * 文件哈希工具模块，支持计算文件的MD5、SHA-1、SHA-256等哈希值。
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHasher = void 0;
var crypto = __importStar(require("crypto"));
var FileHasher = /** @class */ (function () {
    function FileHasher() {
    }
    /**
     * 计算文件的MD5哈希值。
     * @param data 文件的二进制数据。
     * @returns 返回文件的MD5哈希值。
     */
    FileHasher.md5 = function (data) {
        return crypto.createHash('md5').update(data).digest('hex');
    };
    /**
     * 计算文件的SHA-1哈希值。
     * @param data 文件的二进制数据。
     * @returns 返回文件的SHA-1哈希值。
     */
    FileHasher.sha1 = function (data) {
        return crypto.createHash('sha1').update(data).digest('hex');
    };
    /**
     * 计算文件的SHA-256哈希值。
     * @param data 文件的二进制数据。
     * @returns 返回文件的SHA-256哈希值。
     */
    FileHasher.sha256 = function (data) {
        return crypto.createHash('sha256').update(data).digest('hex');
    };
    /**
     * 校验文件的哈希值是否匹配。
     * @param data 文件的二进制数据。
     * @param expectedHash 预期的哈希值。
     * @param algorithm 使用的哈希算法，默认为SHA-256。
     * @returns 返回布尔值，表示文件哈希是否匹配。
     */
    FileHasher.verifyHash = function (data, expectedHash, algorithm) {
        if (algorithm === void 0) { algorithm = 'sha256'; }
        var computedHash = this[algorithm](data);
        return computedHash === expectedHash;
    };
    return FileHasher;
}());
exports.FileHasher = FileHasher;
/**
 * 使用示例：
 * ```typescript
 * import * as fs from 'fs';
 *
 * const fileData = fs.readFileSync('path/to/file');
 * const fileHash = FileHasher.sha256(fileData);
 * console.log(`文件的SHA-256哈希值: ${fileHash}`);
 *
 * const isValid = FileHasher.verifyHash(fileData, fileHash);
 * console.log(`哈希值是否匹配: ${isValid}`);
 * ```
 */
