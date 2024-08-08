/**
 * 翻转图像（水平或垂直）
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {boolean} [horizontal=true] - 是否水平翻转
 * @param {boolean} [vertical=false] - 是否垂直翻转
 * @returns {Promise<Blob>} 返回翻转后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * flipImage(blob, true, false).then(flippedBlob => {
 *   // Do something with flippedBlob
 * });
 */
export function flipImage(
  imageBlob: Blob,
  horizontal = true,
  vertical = false
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return reject(new Error('Canvas context not supported'));
    }

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.save();
      ctx.scale(horizontal ? -1 : 1, vertical ? -1 : 1);
      ctx.drawImage(
        img,
        horizontal ? -img.width : 0,
        vertical ? -img.height : 0
      );
      ctx.restore();

      canvas.toBlob((flippedBlob) => {
        if (flippedBlob) {
          resolve(flippedBlob);
        } else {
          reject(new Error('Flipping failed'));
        }
      }, imageBlob.type);
    };

    img.onerror = () => reject(new Error('Image loading failed'));
    img.src = URL.createObjectURL(imageBlob);
  });
}
