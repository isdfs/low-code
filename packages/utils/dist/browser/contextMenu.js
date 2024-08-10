"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableContextMenu = exports.disableContextMenu = void 0;
/**
 * 禁用右键菜单。
 *
 * 该方法用于禁用浏览器的右键上下文菜单，通常用于防止用户复制内容或执行其他默认右键操作。
 *
 * @returns {void}
 *
 * @example
 * ```
 * disableContextMenu();
 * ```
 */
function disableContextMenu() {
    document.addEventListener('contextmenu', function (event) { return event.preventDefault(); });
}
exports.disableContextMenu = disableContextMenu;
/**
* 启用右键菜单。
*
* 该方法用于重新启用浏览器的右键上下文菜单。
*
* @returns {void}
*
* @example
* ```
* enableContextMenu();
* ```
*/
function enableContextMenu() {
    document.removeEventListener('contextmenu', function (event) { return event.preventDefault(); });
}
exports.enableContextMenu = enableContextMenu;
