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
export { workerManager } from './workerManager';