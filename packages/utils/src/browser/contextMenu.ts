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
export function disableContextMenu(): void {
  document.addEventListener('contextmenu', event => event.preventDefault());
}

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
export function enableContextMenu(): void {
  document.removeEventListener('contextmenu', event => event.preventDefault());
}
