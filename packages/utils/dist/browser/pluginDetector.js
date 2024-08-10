"use strict";
/**
 * 浏览器插件检测模块，提供用户浏览器已安装插件的详细信息。
 * @module PluginDetector
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPluginDetails = exports.isPluginInstalled = exports.getInstalledPlugins = void 0;
/**
 * 检测并获取浏览器中已安装的插件列表。
 * @returns {string[]} 插件名称数组
 */
function getInstalledPlugins() {
    return Array.from(navigator.plugins).map(function (plugin) { return plugin.name; });
}
exports.getInstalledPlugins = getInstalledPlugins;
/**
* 检测特定插件是否已安装。
* @param {string} pluginName - 插件的名称
* @returns {boolean} 插件是否已安装
*/
function isPluginInstalled(pluginName) {
    return getInstalledPlugins().includes(pluginName);
}
exports.isPluginInstalled = isPluginInstalled;
/**
* 获取某个插件的详细信息。
* @param {string} pluginName - 插件的名称
* @returns {Plugin | null} 插件的详细信息或 null 如果未安装
*/
function getPluginDetails(pluginName) {
    return Array.from(navigator.plugins).find(function (plugin) { return plugin.name === pluginName; }) || null;
}
exports.getPluginDetails = getPluginDetails;
