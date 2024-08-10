/**
 * 获取当前浏览器的用户代理信息。
 *
 * 该方法用于解析浏览器的用户代理字符串，提取出浏览器名称、版本号以及操作系统信息。
 *
 * @returns {object} 包含浏览器名称、版本号和操作系统信息的对象。
 *
 * @example
 * ```
 * const userAgentInfo = getUserAgentInfo();
 * console.log(userAgentInfo.browser);  // 输出浏览器名称，如 'Chrome'
 * console.log(userAgentInfo.version);  // 输出浏览器版本号，如 '91.0.4472.124'
 * console.log(userAgentInfo.os);       // 输出操作系统，如 'Windows'
 * ```
 */
export declare function getUserAgentInfo(): {
    browser: string;
    version: string;
    os: string;
};
