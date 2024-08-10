/**
 * 从图像文件生成缩略图。
 * @param file - 原始图像文件。
 * @param width - 缩略图的宽度。
 * @param height - 缩略图的高度。
 * @returns 返回一个Promise，包含生成的缩略图Blob。
 */
export function generateImageThumbnail(file: File, width: number, height: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(event) {
          const img = new Image();
          img.src = event.target?.result as string;

          img.onload = function() {
              const canvas = document.createElement('canvas');
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');

              if (ctx) {
                  ctx.drawImage(img, 0, 0, width, height);
                  canvas.toBlob(blob => {
                      if (blob) {
                          resolve(blob);
                      } else {
                          reject(new Error('Thumbnail generation failed'));
                      }
                  });
              } else {
                  reject(new Error('Canvas context is not supported'));
              }
          };
      };
      reader.onerror = function() {
          reject(new Error('Error reading file'));
      };
      reader.readAsDataURL(file);
  });
}
