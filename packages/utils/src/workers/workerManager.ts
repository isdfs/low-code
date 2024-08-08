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
export function workerManager(workerScript: string) {
   const worker = new Worker(workerScript);

   function runTask(data: any): Promise<any> {
       return new Promise((resolve, reject) => {
           worker.onmessage = (event) => resolve(event.data);
           worker.onerror = (error) => reject(error);
           worker.postMessage(data);
       });
   }

   function terminate() {
       worker.terminate();
   }

   return {
       runTask,
       terminate,
   };
}
