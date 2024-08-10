/**
 * 将指定滤镜应用到图像上。
 * @param image - 原始图像的HTMLImageElement。
 * @param filter - 要应用的CSS滤镜，如"grayscale(100%)"。
 * @returns 返回一个Promise，包含应用滤镜后的图像Blob。
 */
export function applyFilterToImage(image: HTMLImageElement, filter: string): Promise<Blob> {
  return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext('2d');

      if (ctx) {
          ctx.filter = filter;
          ctx.drawImage(image, 0, 0);
          canvas.toBlob(blob => {
              if (blob) {
                  resolve(blob);
              } else {
                  reject(new Error('Failed to apply filter to image'));
              }
          });
      } else {
          reject(new Error('Canvas context is not supported'));
      }
  });
}
