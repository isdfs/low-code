/**
 * 验证给定的字符串是否为有效的URL。
 *
 * @param {string} url - 要验证的字符串。
 * @returns {boolean} 如果是有效的URL则返回true，否则返回false。
 *
 * @example
 * const isValid = isURL('https://www.example.com');
 * console.log(isValid); // true
 */
export function isURL(url: string): boolean {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!pattern.test(url);
}
