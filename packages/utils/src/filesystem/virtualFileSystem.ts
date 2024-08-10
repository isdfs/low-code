/**
 * 虚拟文件系统模块，用于在内存中模拟文件操作。
 */

interface File {
  name: string;
  content: string;
}

export class VirtualFileSystem {
  private files: Map<string, File> = new Map();

  /**
   * 创建新文件。
   * @param name 文件名。
   * @param content 文件内容。
   */
  createFile(name: string, content: string): void {
    if (this.files.has(name)) {
      throw new Error(`文件 "${name}" 已存在。`);
    }
    this.files.set(name, { name, content });
  }

  /**
   * 读取文件内容。
   * @param name 文件名。
   * @returns 文件的内容。
   */
  readFile(name: string): string {
    const file = this.files.get(name);
    if (!file) {
      throw new Error(`文件 "${name}" 不存在。`);
    }
    return file.content;
  }

  /**
   * 更新文件内容。
   * @param name 文件名。
   * @param content 新的文件内容。
   */
  updateFile(name: string, content: string): void {
    if (!this.files.has(name)) {
      throw new Error(`文件 "${name}" 不存在。`);
    }
    this.files.set(name, { name, content });
  }

  /**
   * 删除文件。
   * @param name 文件名。
   */
  deleteFile(name: string): void {
    if (!this.files.delete(name)) {
      throw new Error(`文件 "${name}" 不存在。`);
    }
  }

  /**
   * 列出所有文件。
   * @returns 文件名的数组。
   */
  listFiles(): string[] {
    return Array.from(this.files.keys());
  }
}
