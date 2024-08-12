/**
 * 禁用页面导航模块。
 *
 * 该模块用于暂时阻止页面导航，适用于表单编辑时阻止用户意外离开页面。
 *
 * @example
 * ```
 * disableNavigation('您有未保存的更改，确定要离开此页面吗？');
 * enableNavigation();
 * ```
 */
/**
 * 禁用页面导航。
 *
 * 该方法会在用户尝试离开页面时提示确认，避免用户意外丢失未保存的数据。
 *
 * @param {string} message - 提示用户的消息内容。
 * @returns {void}
 *
 * @example
 * ```
 * disableNavigation('您有未保存的更改，确定要离开此页面吗？');
 * ```
 */
export declare function disableNavigation(message: string): void;
/**
* 启用页面导航。
*
* 该方法用于恢复默认的页面导航行为，取消导航拦截。
*
* @returns {void}
*
* @example
* ```
* enableNavigation();
* ```
*/
export declare function enableNavigation(): void;
