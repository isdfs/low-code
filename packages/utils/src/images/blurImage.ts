/**
 * 为图像添加模糊效果。
 * @param image - 原始图像的HTMLImageElement。
 * @param blurAmount - 模糊程度，默认为5px。
 * @returns 返回一个Promise，包含模糊处理后的图像Blob。
 */
export function blurImage(image: HTMLImageElement, blurAmount: number = 5): Promise<Blob> {
  return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
          ctx.filter = `blur(${blurAmount}px)`;
          ctx.drawImage(image, 0, 0);
          canvas.toBlob(blob => {
              if (blob) {
                  resolve(blob);
              } else {
                  reject(new Error('Failed to apply blur effect to image'));
              }
          });
      } else {
          reject(new Error('Canvas context is not supported'));
      }
  });
}
