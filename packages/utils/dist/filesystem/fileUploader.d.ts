/**
 * 文件上传器模块，支持文件上传和进度跟踪。
 */
export interface UploadProgress {
    loaded: number;
    total: number;
}
export declare class FileUploader {
    /**
     * 上传文件到指定URL。
     * @param url 上传的目标URL。
     * @param file 要上传的文件对象。
     * @param onProgress 上传进度回调函数。
     * @returns 返回上传成功后的服务器响应。
     */
    static upload(url: string, file: File, onProgress?: (progress: UploadProgress) => void): Promise<any>;
}
/**
 * 使用示例：
 * ```typescript
 * const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
 *
 * fileInput.addEventListener('change', () => {
 *   if (fileInput.files && fileInput.files.length > 0) {
 *     const file = fileInput.files[0];
 *
 *     FileUploader.upload('https://example.com/upload', file, (progress) => {
 *       console.log(`上传进度: ${progress.loaded} / ${progress.total}`);
 *     })
 *     .then(response => {
 *       console.log('上传成功:', response);
 *     })
 *     .catch(error => {
 *       console.error('上传失败:', error);
 *     });
 *   }
 * });
 * ```
 */
