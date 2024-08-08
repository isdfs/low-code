/**
 * 命令模式管理器，用于封装和执行命令。
 *
 * @template R - 命令执行的结果类型。
 * @returns {{
*   execute: (command: () => R) => R,
*   undo: () => R | undefined,
*   redo: () => R | undefined,
*   clearHistory: () => void
* }} - 包含执行命令、撤销命令、重做命令和清除历史记录的方法。
*
* @example
* const commandManager = createCommandManager<number>();
* const add = () => 1 + 1;
* commandManager.execute(add); // 返回 2
* commandManager.undo(); // 返回 undefined，因为没有撤销
* commandManager.redo(); // 返回 undefined，因为没有重做
*/
function createCommandManager<R>() {
   let history: { command: () => R, result: R }[] = [];
   let undoStack: { command: () => R, result: R }[] = [];

   return {
       execute(command: () => R): R {
           const result = command();
           history.push({ command, result });
           undoStack = []; // 清空重做栈，因为新的命令执行后，旧的重做历史不再有效
           return result;
       },

       undo(): R | undefined {
           const lastCommand = history.pop();
           if (lastCommand) {
               undoStack.push(lastCommand);
               return lastCommand.result;
           }
           return undefined;
       },

       redo(): R | undefined {
           const commandToRedo = undoStack.pop();
           if (commandToRedo) {
               const result = commandToRedo.command();
               history.push({ command: commandToRedo.command, result });
               return result;
           }
           return undefined;
       },

       clearHistory(): void {
           history = [];
           undoStack = [];
       }
   };
}

// 使用示例
// const commandManager = createCommandManager<number>();
// const add = () => 1 + 1;
// console.log(commandManager.execute(add)); // 输出: 2
// console.log(commandManager.undo()); // 输出: 2
// console.log(commandManager.redo()); // 输出: 2
// commandManager.clearHistory();
