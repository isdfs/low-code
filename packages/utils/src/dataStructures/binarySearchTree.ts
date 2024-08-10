/**
 * 表示二叉搜索树的节点。
 */
interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

/**
* 二叉搜索树类，支持插入、查找和删除操作。
*/
export class BinarySearchTree<T> {
  private root: TreeNode<T> | null = null;

  /**
   * 向树中插入一个新元素。
   * @param value - 要插入的元素。
   */
  public insert(value: T): void {
      const newNode: TreeNode<T> = { value, left: null, right: null };

      if (!this.root) {
          this.root = newNode;
      } else {
          this.insertNode(this.root, newNode);
      }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
      if (newNode.value < node.value) {
          if (!node.left) {
              node.left = newNode;
          } else {
              this.insertNode(node.left, newNode);
          }
      } else {
          if (!node.right) {
              node.right = newNode;
          } else {
              this.insertNode(node.right, newNode);
          }
      }
  }

  /**
   * 查找树中的一个元素。
   * @param value - 要查找的元素值。
   * @returns 如果找到元素则返回true，否则返回false。
   */
  public search(value: T): boolean {
      return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
      if (!node) {
          return false;
      }

      if (value < node.value) {
          return this.searchNode(node.left, value);
      } else if (value > node.value) {
          return this.searchNode(node.right, value);
      } else {
          return true;
      }
  }

  /**
   * 从树中删除一个元素。
   * @param value - 要删除的元素值。
   */
  public remove(value: T): void {
      this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
      if (!node) {
          return null;
      }

      if (value < node.value) {
          node.left = this.removeNode(node.left, value);
          return node;
      } else if (value > node.value) {
          node.right = this.removeNode(node.right, value);
          return node;
      } else {
          // node with no children
          if (!node.left && !node.right) {
              return null;
          }

          // node with only one child
          if (!node.left) {
              return node.right;
          }

          if (!node.right) {
              return node.left;
          }

          // node with two children
          const minRight = this.findMinNode(node.right);
          node.value = minRight!.value;
          node.right = this.removeNode(node.right, minRight!.value);
          return node;
      }
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
      while (node.left) {
          node = node.left;
      }
      return node;
  }
}
