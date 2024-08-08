/**
 * 节点接口，表示链表中的一个节点。
 */
interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
}

/**
* 链表类，支持插入、删除和遍历操作。
*/
export class LinkedList<T> {
  private head: ListNode<T> | null = null;

  /**
   * 向链表末尾添加一个新元素。
   * @param value - 要添加的元素。
   */
  public append(value: T): void {
      const newNode: ListNode<T> = { value, next: null };
      if (!this.head) {
          this.head = newNode;
          return;
      }

      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = newNode;
  }

  /**
   * 从链表中删除一个元素。
   * @param value - 要删除的元素值。
   * @returns 如果成功删除则返回true，否则返回false。
   */
  public remove(value: T): boolean {
      if (!this.head) return false;

      if (this.head.value === value) {
          this.head = this.head.next;
          return true;
      }

      let current = this.head;
      while (current.next && current.next.value !== value) {
          current = current.next;
      }

      if (current.next) {
          current.next = current.next.next;
          return true;
      }

      return false;
  }

  /**
   * 遍历链表，执行给定的回调函数。
   * @param callback - 对每个元素执行的回调函数。
   */
  public traverse(callback: (value: T) => void): void {
      let current = this.head;
      while (current) {
          callback(current.value);
          current = current.next;
      }
  }
}
