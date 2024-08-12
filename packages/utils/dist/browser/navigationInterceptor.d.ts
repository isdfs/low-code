/**
 * 导航拦截器模块。
 *
 * 该模块允许开发者在页面导航之前拦截并进行自定义处理，例如提示用户保存未保存的数据。
 *
 * @example
 * ```
 * addNavigationInterceptor((event) => {
 *   const confirmationMessage = '您有未保存的更改，确定要离开此页面吗？';
 *   event.returnValue = confirmationMessage;  // 兼容性处理
 *   return confirmationMessage;  // 用于现代浏览器
 * });
 *
 * removeNavigationInterceptor();
 * ```
 */
/**
 * 添加导航拦截器。
 *
 * 该方法允许在页面导航之前进行拦截，并通过回调函数自定义处理逻辑。
 *
 * @param {(event: BeforeUnloadEvent) => string | void} callback - 导航拦截回调函数，返回值将显示在离开页面的提示框中。
 * @returns {void}
 *
 * @example
 * ```
 * addNavigationInterceptor((event) => {
 *   const confirmationMessage = '您有未保存的更改，确定要离开此页面吗？';
 *   event.returnValue = confirmationMessage;  // 兼容性处理
 *   return confirmationMessage;  // 用于现代浏览器
 * });
 * ```
 */
export declare function addNavigationInterceptor(callback: (event: BeforeUnloadEvent) => string | void): void;
/**
* 移除导航拦截器。
*
* 该方法用于移除之前添加的导航拦截器。
*
* @param {(event: BeforeUnloadEvent) => string | void} callback - 要移除的导航拦截回调函数。
* @returns {void}
*
* @example
* ```
* removeNavigationInterceptor();
* ```
*/
export declare function removeNavigationInterceptor(callback: (event: BeforeUnloadEvent) => string | void): void;
