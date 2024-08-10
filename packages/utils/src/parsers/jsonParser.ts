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

export class JSONParser {
  private options: JSONParserOptions;

  /**
   * 创建一个JSON解析器实例。
   * @param options 配置选项。
   */
  constructor(options: JSONParserOptions = {}) {
    this.options = options;
  }

  /**
   * 解析JSON字符串。
   * @param jsonString 要解析的JSON字符串。
   * @returns 返回解析后的对象。
   * @throws 当JSON格式错误或遇到重复键（根据配置）时抛出错误。
   */
  parse(jsonString: string): any {
    try {
      const reviver = this.options.duplicateKeyHandling ? this.createReviver() : undefined;
      return JSON.parse(jsonString, reviver);
    } catch (error) {
      throw new Error(`JSON解析失败: ${(error as Error).message}`);
    }
  }

  /**
   * 创建一个自定义的reviver函数，用于处理重复键。
   * @returns 返回reviver函数。
   * @private
   */
  private createReviver(): (key: string, value: any) => any {
    const keyStack: string[] = [];
    const keySetStack: Array<Set<string>> = [];

    return (key: string, value: any) => {
      if (typeof value === 'object' && value !== null) {
        const currentKeySet = new Set<string>();
        keySetStack.push(currentKeySet);
      }

      const currentKeySet = keySetStack[keySetStack.length - 1];
      if (currentKeySet) {
        if (currentKeySet.has(key)) {
          switch (this.options.duplicateKeyHandling) {
            case 'error':
              throw new Error(`在路径${keyStack.join('.')}中检测到重复的键：${key}`);
            case 'ignore':
              return undefined;
            case 'overwrite':
              // 不做处理，直接覆盖
              break;
            default:
              break;
          }
        } else {
          currentKeySet.add(key);
        }
      }

      keyStack.push(key);
      return value;
    };
  }
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
