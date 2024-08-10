/**
 * @module StringConverter
 * @description 提供字符串与常用数据结构之间的转换功能，支持 JSON、XML、YAML 等格式的转换与解析。
 */

export class StringConverter {

  /**
   * @description 将对象转换为 JSON 字符串
   * @param obj 要转换的对象
   * @returns JSON 字符串
   * @example
   * ```typescript
   * const jsonString = StringConverter.objectToJson({ name: 'Alice', age: 30 });
   * console.log(jsonString); // 输出 '{"name":"Alice","age":30}'
   * ```
   */
  static objectToJson(obj: Record<string, any>): string {
      return JSON.stringify(obj);
  }

  /**
   * @description 将 JSON 字符串解析为对象
   * @param jsonString 要解析的 JSON 字符串
   * @returns 解析后的对象
   * @example
   * ```typescript
   * const obj = StringConverter.jsonToObject('{"name":"Alice","age":30}');
   * console.log(obj); // 输出 { name: 'Alice', age: 30 }
   * ```
   */
  static jsonToObject<T>(jsonString: string): T {
      return JSON.parse(jsonString) as T;
  }

  /**
   * @description 将对象转换为 XML 字符串
   * @param obj 要转换的对象
   * @returns XML 字符串
   * @example
   * ```typescript
   * const xmlString = StringConverter.objectToXml({ name: 'Alice', age: 30 });
   * console.log(xmlString); // 输出 '<root><name>Alice</name><age>30</age></root>'
   * ```
   */
  static objectToXml(obj: Record<string, any>): string {
      const toXml = (v: any, tagName: string): any => {
          if (typeof v === 'object' && v !== null) {
              return `<${tagName}>${Object.entries(v).map(([key, value]) => toXml(value, key)).join('')}</${tagName}>`;
          }
          return `<${tagName}>${v}</${tagName}>`;
      };
      return `<root>${Object.entries(obj).map(([key, value]) => toXml(value, key)).join('')}</root>`;
  }

  /**
   * @description 将 XML 字符串解析为对象
   * @param xmlString 要解析的 XML 字符串
   * @returns 解析后的对象
   * @example
   * ```typescript
   * const obj = StringConverter.xmlToObject('<root><name>Alice</name><age>30</age></root>');
   * console.log(obj); // 输出 { name: 'Alice', age: 30 }
   * ```
   */
  static xmlToObject(xmlString: string): Record<string, any> {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, 'application/xml');
      const parseNode = (node: Element): any => {
          const obj: any = {};
          for (let i = 0; i < node.children.length; i++) {
              const child = node.children[i];
              const childName = child.nodeName;
              if (child.children.length > 0) {
                  obj[childName] = parseNode(child);
              } else {
                  obj[childName] = child.textContent;
              }
          }
          return obj;
      };
      return parseNode(xmlDoc.documentElement);
  }

  /**
   * @description 将对象转换为 YAML 字符串
   * @param obj 要转换的对象
   * @returns YAML 字符串
   * @example
   * ```typescript
   * const yamlString = StringConverter.objectToYaml({ name: 'Alice', age: 30 });
   * console.log(yamlString); // 输出 'name: Alice\nage: 30\n'
   * ```
   */
  static objectToYaml(obj: Record<string, any>): string {
      const yamlify = (v: any, indent: string = ''): string => {
          if (typeof v === 'object' && v !== null) {
              return Object.entries(v).map(([key, value]) => `${indent}${key}: ${yamlify(value, indent + '  ')}`).join('\n');
          }
          return String(v);
      };
      return yamlify(obj);
  }

  /**
   * @description 将 YAML 字符串解析为对象
   * @param yamlString 要解析的 YAML 字符串
   * @returns 解析后的对象
   * @example
   * ```typescript
   * const obj = StringConverter.yamlToObject('name: Alice\nage: 30\n');
   * console.log(obj); // 输出 { name: 'Alice', age: 30 }
   * ```
   */
  static yamlToObject(yamlString: string): Record<string, any> {
      const lines = yamlString.split('\n');
      const result: any = {};
      let currentObj = result;
      const indentStack: { indent: string; obj: any }[] = [];

      lines.forEach(line => {
          if (line.trim() === '') return;

          const match = line.match(/^(\s*)([^:]+):\s*(.*)?$/);
          if (!match) return;

          const [, indent, key, value] = match;
          while (indentStack.length > 0 && indentStack[indentStack.length - 1].indent.length >= indent.length) {
              indentStack.pop();
          }

          if (indentStack.length === 0) {
              currentObj = result;
          } else {
              currentObj = indentStack[indentStack.length - 1].obj;
          }

          if (value) {
              currentObj[key] = value;
          } else {
              currentObj[key] = {};
              indentStack.push({ indent, obj: currentObj[key] });
          }
      });

      return result;
  }
}
