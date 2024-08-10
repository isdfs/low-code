[@isdfs-low-code/utils - v0.0.3](../README.md) / AnimationSequencer

# Class: AnimationSequencer

动画序列器，用于按顺序执行一组动画。

**`param`** 包含一系列返回Promise的动画函数。

**`returns`** 返回一个Promise，表示所有动画执行完毕。

**`example`**
const fadeIn = () => new Promise(resolve => setTimeout(() => { console.log('Fade In'); resolve(); }, 1000));
const move = () => new Promise(resolve => setTimeout(() => { console.log('Move'); resolve(); }, 1000));
const fadeOut = () => new Promise(resolve => setTimeout(() => { console.log('Fade Out'); resolve(); }, 1000));
sequencer([fadeIn, move, fadeOut]).then(() => console.log('All animations done'));

## Table of contents

### Constructors

- [constructor](AnimationSequencer.md#constructor)

### Methods

- [addStep](AnimationSequencer.md#addstep)
- [start](AnimationSequencer.md#start)

## Constructors

### constructor

• **new AnimationSequencer**()

## Methods

### addStep

▸ **addStep**(`animation`, `delay`): `void`

addStep 方法用于向序列中添加动画步骤。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animation` | `KeyframeAnimation` | 要添加的 KeyframeAnimation 实例。 |
| `delay` | `number` | 执行此动画前的延迟时间，以毫秒为单位。 |

#### Returns

`void`

#### Defined in

[animations/sequencer.ts:22](https://github.com/isdfs/low-code/blob/13d528d/packages/utils/src/animations/sequencer.ts#L22)

___

### start

▸ **start**(): `void`

start 方法开始执行动画序列。

#### Returns

`void`

#### Defined in

[animations/sequencer.ts:29](https://github.com/isdfs/low-code/blob/13d528d/packages/utils/src/animations/sequencer.ts#L29)
