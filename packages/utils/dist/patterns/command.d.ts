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
declare function createCommandManager<R>(): {
    execute(command: () => R): R;
    undo(): R | undefined;
    redo(): R | undefined;
    clearHistory(): void;
};
