/**
 * JSON解析器模块，提供了对JSON字符串的安全解析和错误处理。
 */
export interface JSONParserOptions {
    /**
     * 当遇到重复键时的处理策略：
     * - 'error': 抛出错误。
     * - 'overwrite': 覆盖之前的值。
     * - 'ignore': 保留之前的值，忽略新的值。
     */
    duplicateKeyHandling?: 'error' | 'overwrite' | 'ignore';
}
export declare class JSONParser {
    private options;
    /**
     * 创建一个JSON解析器实例。
     * @param options 配置选项。
     */
    constructor(options?: JSONParserOptions);
    /**
     * 解析JSON字符串。
     * @param jsonString 要解析的JSON字符串。
     * @returns 返回解析后的对象。
     * @throws 当JSON格式错误或遇到重复键（根据配置）时抛出错误。
     */
    parse(jsonString: string): any;
    /**
     * 创建一个自定义的reviver函数，用于处理重复键。
     * @returns 返回reviver函数。
     * @private
     */
    private createReviver;
}
/**
 * 使用示例：
 * ```typescript
 * const jsonString = '{"name": "Alice", "age": 30, "name": "Bob"}';
 *
 * const parser = new JSONParser({ duplicateKeyHandling: 'error' });
 * try {
 *   const data = parser.parse(jsonString);
 *   console.log(data);
 * } catch (error) {
 *   console.error(error); // 输出: JSON解析失败: 在路径.name中检测到重复的键：name
 * }
 * ```
 */
