/**
 * @module URLEncoding
 * @description 提供URL中特殊字符的编码与解码功能，确保URL中传输的参数安全。
 */
export declare class URLEncoding {
    /**
     * @description 编码URL中的查询参数
     * @param params 要编码的参数对象
     * @returns 编码后的查询字符串
     * @example
     * const encoded = URLEncoding.encodeParams({ name: 'John Doe', city: 'New York' });
     * console.log('Encoded Params:', encoded); // 输出 "name=John%20Doe&city=New%20York"
     */
    static encodeParams(params: Record<string, string | number | boolean>): string;
    /**
     * @description 解码URL中的查询参数字符串
     * @param queryString 要解码的查询字符串
     * @returns 解码后的参数对象
     * @example
     * const params = URLEncoding.decodeParams('name=John%20Doe&city=New%20York');
     * console.log('Decoded Params:', params); // 输出 { name: "John Doe", city: "New York" }
     */
    static decodeParams(queryString: string): Record<string, string>;
    /**
     * @description 编码URL中的路径部分
     * @param path 要编码的路径字符串
     * @returns 编码后的路径字符串
     * @example
     * const encodedPath = URLEncoding.encodePath('/path/to/resource');
     * console.log('Encoded Path:', encodedPath); // 输出 "%2Fpath%2Fto%2Fresource"
     */
    static encodePath(path: string): string;
    /**
     * @description 解码URL中的路径部分
     * @param encodedPath 要解码的路径字符串
     * @returns 解码后的路径字符串
     * @example
     * const decodedPath = URLEncoding.decodePath('%2Fpath%2Fto%2Fresource');
     * console.log('Decoded Path:', decodedPath); // 输出 "/path/to/resource"
     */
    static decodePath(encodedPath: string): string;
}
