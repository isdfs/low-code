/**
 * 二叉树数据结构模块，支持插入、查找和遍历操作。
 */

class BinaryTreeNode<T> {
  public value: T;
  public left: BinaryTreeNode<T> | null = null;
  public right: BinaryTreeNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export class BinaryTree<T> {
  private root: BinaryTreeNode<T> | null = null;

  /**
   * 向二叉树中插入一个新值。
   * @param value 要插入的值。
   */
  insert(value: T): void {
    const newNode = new BinaryTreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>): void {
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
   * 在二叉树中查找一个值。
   * @param value 要查找的值。
   * @returns 如果找到，返回节点；否则返回null。
   */
  find(value: T): BinaryTreeNode<T> | null {
    return this.findNode(this.root, value);
  }

  private findNode(node: BinaryTreeNode<T> | null, value: T): BinaryTreeNode<T> | null {
    if (!node) {
      return null;
    }

    if (value === node.value) {
      return node;
    } else if (value < node.value) {
      return this.findNode(node.left, value);
    } else {
      return this.findNode(node.right, value);
    }
  }

  /**
   * 中序遍历二叉树。
   * @param visitCallback 访问节点时的回调函数。
   */
  inOrderTraverse(visitCallback: (node: BinaryTreeNode<T>) => void): void {
    this.inOrderTraverseNode(this.root, visitCallback);
  }

  private inOrderTraverseNode(node: BinaryTreeNode<T> | null, visitCallback: (node: BinaryTreeNode<T>) => void): void {
    if (node) {
      this.inOrderTraverseNode(node.left, visitCallback);
      visitCallback(node);
      this.inOrderTraverseNode(node.right, visitCallback);
    }
  }

  /**
   * 先序遍历二叉树。
   * @param visitCallback 访问节点时的回调函数。
   */
  preOrderTraverse(visitCallback: (node: BinaryTreeNode<T>) => void): void {
    this.preOrderTraverseNode(this.root, visitCallback);
  }

  private preOrderTraverseNode(node: BinaryTreeNode<T> | null, visitCallback: (node: BinaryTreeNode<T>) => void): void {
    if (node) {
      visitCallback(node);
      this.preOrderTraverseNode(node.left, visitCallback);
      this.preOrderTraverseNode(node.right, visitCallback);
    }
  }

  /**
   * 后序遍历二叉树。
   * @param visitCallback 访问节点时的回调函数。
   */
  postOrderTraverse(visitCallback: (node: BinaryTreeNode<T>) => void): void {
    this.postOrderTraverseNode(this.root, visitCallback);
  }

  private postOrderTraverseNode(node: BinaryTreeNode<T> | null, visitCallback: (node: BinaryTreeNode<T>) => void): void {
    if (node) {
      this.postOrderTraverseNode(node.left, visitCallback);
      this.postOrderTraverseNode(node.right, visitCallback);
      visitCallback(node);
    }
  }
}

/**
 * 使用示例：
 * ```typescript
 * const tree = new BinaryTree<number>();
 * tree.insert(10);
 * tree.insert(5);
 * tree.insert(15);
 * tree.insert(3);
 * 
 * console.log('In-order traversal:');
 * tree.inOrderTraverse(node => console.log(node.value)); // 输出: 3, 5, 10, 15
 * 
 * console.log('Pre-order traversal:');
 * tree.preOrderTraverse(node => console.log(node.value)); // 输出: 10, 5, 3, 15
 * 
 * console.log('Post-order traversal:');
 * tree.postOrderTraverse(node => console.log(node.value)); // 输出: 3, 5, 15, 10
 * ```
 */
