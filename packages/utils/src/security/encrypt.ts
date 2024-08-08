// src/security/encrypt.ts

/**
 * 简单的加密函数（Caesar Cipher）
 *
 * @param {string} text - 要加密的文本
 * @param {number} shift - 位移量
 * @returns {string} 加密后的文本
 *
 * @example
 * const encrypted = encrypt('hello', 3); // khoor
 */
export function encrypt(text: string, shift: number): string {
  return text.split('').map(char => {
      const code = char.charCodeAt(0);
      return String.fromCharCode(code + shift);
  }).join('');
}

/**
* 简单的解密函数（Caesar Cipher）
*
* @param {string} text - 要解密的文本
* @param {number} shift - 位移量
* @returns {string} 解密后的文本
*
* @example
* const decrypted = decrypt('khoor', 3); // hello
*/
export function decrypt(text: string, shift: number): string {
  return encrypt(text, -shift);
}
