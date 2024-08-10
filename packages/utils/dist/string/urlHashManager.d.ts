/**
 * @module URLHashManager
 * @description 提供浏览器环境下的URL哈希操作功能，支持获取、设置和清除URL的哈希部分。
 */
export declare class URLHashManager {
    /**
     * @description 获取当前页面URL中的哈希值
     * @returns 当前页面的哈希值字符串
     * @example
     * const hash = URLHashManager.getHash();
     * console.log('Hash:', hash); // 假设 URL 为 https://example.com/path#section，输出 "section"
     */
    static getHash(): string;
    /**
     * @description 设置当前页面URL中的哈希值，并可选更新浏览器历史
     * @param hash 新的哈希值字符串
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLHashManager.setHash('newSection', true);
     * // 假设原 URL 为 https://example.com/path#section，执行后 URL 变为 https://example.com/path#newSection
     */
    static setHash(hash: string, updateHistory?: boolean): void;
    /**
     * @description 清除当前页面URL中的哈希值
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLHashManager.clearHash(true);
     * // 假设原 URL 为 https://example.com/path#section，执行后 URL 变为 https://example.com/path
     */
    static clearHash(updateHistory?: boolean): void;
}
