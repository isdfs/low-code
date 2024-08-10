/**
 * 浏览器插件检测模块，提供用户浏览器已安装插件的详细信息。
 * @module PluginDetector
 */
/**
 * 检测并获取浏览器中已安装的插件列表。
 * @returns {string[]} 插件名称数组
 */
export declare function getInstalledPlugins(): string[];
/**
* 检测特定插件是否已安装。
* @param {string} pluginName - 插件的名称
* @returns {boolean} 插件是否已安装
*/
export declare function isPluginInstalled(pluginName: string): boolean;
/**
* 获取某个插件的详细信息。
* @param {string} pluginName - 插件的名称
* @returns {Plugin | null} 插件的详细信息或 null 如果未安装
*/
export declare function getPluginDetails(pluginName: string): Plugin | null;
