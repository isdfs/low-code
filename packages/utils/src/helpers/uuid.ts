/**
 * 生成 UUID v4
 *
 * @returns {string} 返回生成的 UUID
 *
 * @example
 * const id = uuid();
 * console.log(id); // 'e.g. 123e4567-e89b-12d3-a456-426614174000'
 */
export function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
