"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printPage = void 0;
/**
 * 页面打印。
 *
 * 该方法用于触发浏览器的打印功能，可以应用于需要生成纸质文档或保存为PDF的场景。
 *
 * @returns {void}
 *
 * @example
 * ```
 * printPage();
 * ```
 */
function printPage() {
    window.print();
}
exports.printPage = printPage;
