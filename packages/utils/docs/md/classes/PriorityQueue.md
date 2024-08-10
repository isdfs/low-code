[@isdfs-low-code/utils - v0.0.3](../README.md) / PriorityQueue

# Class: PriorityQueue<T\>

优先队列，用于按照优先级顺序处理任务。

**`param`** 初始元素及其优先级的数组。

**`returns`** {{
  enqueue: (item: T, priority: number) => void,
  dequeue: () => T | undefined,
  peek: () => T | undefined,
  size: () => number
}} - 包含入队、出队、查看队首元素和获取队列大小的方法。

**`example`**
const pq = priorityQueue<string>();
pq.enqueue('task1', 2);
pq.enqueue('task2', 1);
console.log(pq.dequeue()); // 'task2'

## Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 队列元素的类型。 |

## Table of contents

### Constructors

- [constructor](PriorityQueue.md#constructor)

### Methods

- [dequeue](PriorityQueue.md#dequeue)
- [enqueue](PriorityQueue.md#enqueue)
- [isEmpty](PriorityQueue.md#isempty)

## Constructors

### constructor

• **new PriorityQueue**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

## Methods

### dequeue

▸ **dequeue**(): ``null`` \| `T`

从队列中取出优先级最高的元素。

#### Returns

``null`` \| `T`

优先级最高的元素，如果队列为空则返回null。

#### Defined in

[dataStructures/priorityQueue.ts:36](https://github.com/isdfs/low-code/blob/13d528d/packages/utils/src/dataStructures/priorityQueue.ts#L36)

___

### enqueue

▸ **enqueue**(`value`, `priority`): `void`

向队列中添加元素。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | 要添加的元素。 |
| `priority` | `number` | 元素的优先级，数值越小优先级越高。 |

#### Returns

`void`

#### Defined in

[dataStructures/priorityQueue.ts:26](https://github.com/isdfs/low-code/blob/13d528d/packages/utils/src/dataStructures/priorityQueue.ts#L26)

___

### isEmpty

▸ **isEmpty**(): `boolean`

检查队列是否为空。

#### Returns

`boolean`

如果队列为空，返回true；否则返回false。

#### Defined in

[dataStructures/priorityQueue.ts:17](https://github.com/isdfs/low-code/blob/13d528d/packages/utils/src/dataStructures/priorityQueue.ts#L17)
