"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workerManager = void 0;
/**
 * Web Worker 管理器，用于在 Web Worker 中执行异步任务。
 *
 * @param {string} workerScript - Web Worker 的脚本路径。
 * @returns {{
 *   runTask: (data: any) => Promise<any>,
 *   terminate: () => void
 * }} - 包含运行任务和终止 Worker 的方法。
 *
 * @example
 * const worker = workerManager('worker.js');
 * worker.runTask({ action: 'calculate', payload: 42 }).then(result => console.log(result));
 * worker.terminate();
 */
var workerManager_1 = require("./workerManager");
Object.defineProperty(exports, "workerManager", { enumerable: true, get: function () { return workerManager_1.workerManager; } });
