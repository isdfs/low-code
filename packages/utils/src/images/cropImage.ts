/**
 * 裁剪图像
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {number} startX - 裁剪区域的起始 x 坐标
 * @param {number} startY - 裁剪区域的起始 y 坐标
 * @param {number} width - 裁剪区域的宽度
 * @param {number} height - 裁剪区域的高度
 * @returns {Promise<Blob>} 返回裁剪后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * cropImage(blob, 10, 10, 200, 200).then(croppedBlob => {
 *   // Do something with croppedBlob
 * });
 */
export function cropImage(
  imageBlob: Blob,
  startX: number,
  startY: number,
  width: number,
  height: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return reject(new Error('Canvas context not supported'));
    }

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, startX, startY, width, height, 0, 0, width, height);
      canvas.toBlob((croppedBlob) => {
        if (croppedBlob) {
          resolve(croppedBlob);
        } else {
          reject(new Error('Cropping failed'));
        }
      }, imageBlob.type);
    };

    img.onerror = () => reject(new Error('Image loading failed'));
    img.src = URL.createObjectURL(imageBlob);
  });
}
