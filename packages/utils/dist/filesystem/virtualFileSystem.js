"use strict";
/**
 * 虚拟文件系统模块，用于在内存中模拟文件操作。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualFileSystem = void 0;
var VirtualFileSystem = /** @class */ (function () {
    function VirtualFileSystem() {
        this.files = new Map();
    }
    /**
     * 创建新文件。
     * @param name 文件名。
     * @param content 文件内容。
     */
    VirtualFileSystem.prototype.createFile = function (name, content) {
        if (this.files.has(name)) {
            throw new Error("\u6587\u4EF6 \"".concat(name, "\" \u5DF2\u5B58\u5728\u3002"));
        }
        this.files.set(name, { name: name, content: content });
    };
    /**
     * 读取文件内容。
     * @param name 文件名。
     * @returns 文件的内容。
     */
    VirtualFileSystem.prototype.readFile = function (name) {
        var file = this.files.get(name);
        if (!file) {
            throw new Error("\u6587\u4EF6 \"".concat(name, "\" \u4E0D\u5B58\u5728\u3002"));
        }
        return file.content;
    };
    /**
     * 更新文件内容。
     * @param name 文件名。
     * @param content 新的文件内容。
     */
    VirtualFileSystem.prototype.updateFile = function (name, content) {
        if (!this.files.has(name)) {
            throw new Error("\u6587\u4EF6 \"".concat(name, "\" \u4E0D\u5B58\u5728\u3002"));
        }
        this.files.set(name, { name: name, content: content });
    };
    /**
     * 删除文件。
     * @param name 文件名。
     */
    VirtualFileSystem.prototype.deleteFile = function (name) {
        if (!this.files.delete(name)) {
            throw new Error("\u6587\u4EF6 \"".concat(name, "\" \u4E0D\u5B58\u5728\u3002"));
        }
    };
    /**
     * 列出所有文件。
     * @returns 文件名的数组。
     */
    VirtualFileSystem.prototype.listFiles = function () {
        return Array.from(this.files.keys());
    };
    return VirtualFileSystem;
}());
exports.VirtualFileSystem = VirtualFileSystem;
