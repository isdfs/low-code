"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
/**
* 链表类，支持插入、删除和遍历操作。
*/
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    /**
     * 向链表末尾添加一个新元素。
     * @param value - 要添加的元素。
     */
    LinkedList.prototype.append = function (value) {
        var newNode = { value: value, next: null };
        if (!this.head) {
            this.head = newNode;
            return;
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    };
    /**
     * 从链表中删除一个元素。
     * @param value - 要删除的元素值。
     * @returns 如果成功删除则返回true，否则返回false。
     */
    LinkedList.prototype.remove = function (value) {
        if (!this.head)
            return false;
        if (this.head.value === value) {
            this.head = this.head.next;
            return true;
        }
        var current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            return true;
        }
        return false;
    };
    /**
     * 遍历链表，执行给定的回调函数。
     * @param callback - 对每个元素执行的回调函数。
     */
    LinkedList.prototype.traverse = function (callback) {
        var current = this.head;
        while (current) {
            callback(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
