/**
 * 在图像上应用水印
 *
 * @param {Blob} imageBlob - 原始图片的 Blob 对象
 * @param {string} watermarkText - 要应用的水印文本
 * @param {string} [font='30px Arial'] - 水印文本的字体样式
 * @param {string} [color='rgba(255, 255, 255, 0.5)'] - 水印文本的颜色
 * @param {number} [x=10] - 水印在图像上 x 轴的起始位置
 * @param {number} [y=50] - 水印在图像上 y 轴的起始位置
 * @returns {Promise<Blob>} 返回添加水印后的图片 Blob 对象
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/jpeg" });
 * applyWatermark(blob, 'My Watermark').then(watermarkedBlob => {
 *   // Do something with watermarkedBlob
 * });
 */
export function applyWatermark(
  imageBlob: Blob,
  watermarkText: string,
  font = '30px Arial',
  color = 'rgba(255, 255, 255, 0.5)',
  x = 10,
  y = 50
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
      ctx.drawImage(img, 0, 0);

      // 应用水印
      ctx.font = font;
      ctx.fillStyle = color;
      ctx.fillText(watermarkText, x, y);

      canvas.toBlob((watermarkedBlob) => {
        if (watermarkedBlob) {
          resolve(watermarkedBlob);
        } else {
          reject(new Error('Watermark application failed'));
        }
      }, imageBlob.type);
    };

    img.onerror = () => reject(new Error('Image loading failed'));
    img.src = URL.createObjectURL(imageBlob);
  });
}
