/**
 * @module EnhancedURLParser
 * @description 扩展的URL解析与构建功能，支持解析复杂URL，添加多个参数，并支持路径的动态拼接。
 */
export declare class EnhancedURLParser {
    /**
     * @description 从URL字符串中提取域名
     * @param url 要解析的URL字符串
     * @returns 提取到的域名
     * @example
     * const domain = EnhancedURLParser.extractDomain('https://sub.example.com/path');
     * console.log('Domain:', domain); // 输出 "example.com"
     */
    static extractDomain(url: string): string;
    /**
     * @description 构建包含多个查询参数的URL
     * @param baseURL 基础URL
     * @param params 查询参数对象
     * @returns 构建好的URL字符串
     * @example
     * const url = EnhancedURLParser.buildWithMultipleParams('https://example.com', { name: 'John', age: 30 });
     * console.log('Constructed URL:', url); // 输出 "https://example.com?name=John&age=30"
     */
    static buildWithMultipleParams(baseURL: string, params: Record<string, string | number | boolean>): string;
    /**
     * @description 动态拼接多个路径段，生成完整的URL路径
     * @param segments 要拼接的路径段数组
     * @returns 拼接后的完整路径
     * @example
     * const path = EnhancedURLParser.joinPathSegments(['/path', 'to', '/resource']);
     * console.log('Joined Path:', path); // 输出 "/path/to/resource"
     */
    static joinPathSegments(segments: string[]): string;
}
