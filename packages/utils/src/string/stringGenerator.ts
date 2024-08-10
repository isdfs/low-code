/**
 * @module StringGenerator
 * @description 提供随机字符串生成功能，支持生成特定长度的字符串、UUID、密码等。
 */

export class StringGenerator {

  /**
   * @description 生成一个指定长度的随机字符串
   * @param length 字符串长度
   * @param charset 可选，指定字符集，默认为字母数字
   * @returns 随机生成的字符串
   * @example
   * const randomStr = StringGenerator.randomString(10);
   * console.log('Random String:', randomStr); // 输出一个10字符长度的随机字符串
   */
  static randomString(length: number, charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
      let result = '';
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          result += charset[randomIndex];
      }
      return result;
  }

  /**
   * @description 生成一个 UUID (v4)
   * @returns 生成的 UUID 字符串
   * @example
   * const uuid = StringGenerator.uuid();
   * console.log('UUID:', uuid); // 输出一个UUID字符串
   */
  static uuid(): string {
      const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
      return template.replace(/[xy]/g, c => {
          const r = Math.random() * 16 | 0;
          const v = c === 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
      });
  }

  /**
   * @description 生成一个强密码
   * @param length 密码长度
   * @returns 生成的强密码字符串
   * @example
   * const password = StringGenerator.strongPassword(16);
   * console.log('Strong Password:', password); // 输出一个16字符长度的强密码
   */
  static strongPassword(length: number): string {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
      return this.randomString(length, charset);
  }
}

// 示例用法
/*
const randomStr = StringGenerator.randomString(10);
console.log('Random String:', randomStr); // 输出一个10字符长度的随机字符串

const uuid = StringGenerator.uuid();
console.log('UUID:', uuid); // 输出一个UUID字符串

const password = StringGenerator.strongPassword(16);
console.log('Strong Password:', password); // 输出一个16字符长度的强密码
*/
