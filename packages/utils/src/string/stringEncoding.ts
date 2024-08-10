/**
 * @module StringEncoding
 * @description 提供字符串的编码与解码功能，支持 Base64、Hex、UTF-8 等常见编码格式的转换。
 */

export class StringEncoding {

  /**
   * @description 将字符串编码为 Base64 格式
   * @param input 要编码的字符串
   * @returns 编码后的 Base64 字符串
   * @example
   * const base64Str = StringEncoding.encodeBase64('Hello, World!');
   * console.log('Base64:', base64Str); // 输出 "SGVsbG8sIFdvcmxkIQ=="
   */
  static encodeBase64(input: string): string {
      return btoa(input);
  }

  /**
   * @description 解码 Base64 格式的字符串
   * @param input 要解码的 Base64 字符串
   * @returns 解码后的原始字符串
   * @example
   * const originalStr = StringEncoding.decodeBase64('SGVsbG8sIFdvcmxkIQ==');
   * console.log('Original:', originalStr); // 输出 "Hello, World!"
   */
  static decodeBase64(input: string): string {
      return atob(input);
  }

  /**
   * @description 将字符串编码为十六进制（Hex）格式
   * @param input 要编码的字符串
   * @returns 编码后的 Hex 字符串
   * @example
   * const hexStr = StringEncoding.encodeHex('Hello');
   * console.log('Hex:', hexStr); // 输出 "48656c6c6f"
   */
  static encodeHex(input: string): string {
      return Array.from(input)
          .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
          .join('');
  }

  /**
   * @description 解码十六进制（Hex）格式的字符串
   * @param input 要解码的 Hex 字符串
   * @returns 解码后的原始字符串
   * @example
   * const originalStr = StringEncoding.decodeHex('48656c6c6f');
   * console.log('Original:', originalStr); // 输出 "Hello"
   */
  static decodeHex(input: string): string {
      return input
          .match(/.{1,2}/g)
          ?.map(byte => String.fromCharCode(parseInt(byte, 16)))
          .join('') || '';
  }

  /**
   * @description 将字符串编码为 UTF-8 格式的字节数组
   * @param input 要编码的字符串
   * @returns 编码后的 Uint8Array 字节数组
   * @example
   * const utf8Bytes = StringEncoding.encodeUtf8('Hello');
   * console.log('UTF-8 Bytes:', utf8Bytes); // 输出 Uint8Array(5) [ 72, 101, 108, 108, 111 ]
   */
  static encodeUtf8(input: string): Uint8Array {
      return new TextEncoder().encode(input);
  }

  /**
   * @description 将 UTF-8 格式的字节数组解码为字符串
   * @param input 要解码的 Uint8Array 字节数组
   * @returns 解码后的原始字符串
   * @example
   * const originalStr = StringEncoding.decodeUtf8(new Uint8Array([72, 101, 108, 108, 111]));
   * console.log('Original:', originalStr); // 输出 "Hello"
   */
  static decodeUtf8(input: Uint8Array): string {
      return new TextDecoder().decode(input);
  }
}

// 示例用法
/*
const base64Str = StringEncoding.encodeBase64('Hello, World!');
console.log('Base64:', base64Str); // 输出 "SGVsbG8sIFdvcmxkIQ=="

const originalStr = StringEncoding.decodeBase64(base64Str);
console.log('Original:', originalStr); // 输出 "Hello, World!"

const hexStr = StringEncoding.encodeHex('Hello');
console.log('Hex:', hexStr); // 输出 "48656c6c6f"

const decodedHexStr = StringEncoding.decodeHex(hexStr);
console.log('Decoded Hex:', decodedHexStr); // 输出 "Hello"

const utf8Bytes = StringEncoding.encodeUtf8('Hello');
console.log('UTF-8 Bytes:', utf8Bytes); // 输出 Uint8Array(5) [ 72, 101, 108, 108, 111 ]

const originalUtf8Str = StringEncoding.decodeUtf8(utf8Bytes);
console.log('Original UTF-8:', originalUtf8Str); // 输出 "Hello"
*/
