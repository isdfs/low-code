@isdfs-low-code/utils - v0.0.3

# @isdfs-low-code/utils - v0.0.3

## Table of contents

### Functions

- [accessControl](README.md#accesscontrol)
- [addDays](README.md#adddays)
- [advancedStrategy](README.md#advancedstrategy)
- [aggregateBy](README.md#aggregateby)
- [animateElement](README.md#animateelement)
- [animateScrollTo](README.md#animatescrollto)
- [applyWatermark](README.md#applywatermark)
- [base64ToBlob](README.md#base64toblob)
- [base64ToFile](README.md#base64tofile)
- [base64ToImageFile](README.md#base64toimagefile)
- [batchRequest](README.md#batchrequest)
- [blobToBase64](README.md#blobtobase64)
- [blobToFile](README.md#blobtofile)
- [cacheWithTTL](README.md#cachewithttl)
- [camelCaseToSnakeCase](README.md#camelcasetosnakecase)
- [capitalize](README.md#capitalize)
- [chunk](README.md#chunk)
- [clamp](README.md#clamp)
- [compressImage](README.md#compressimage)
- [copyToClipboard](README.md#copytoclipboard)
- [createBreakpoints](README.md#createbreakpoints)
- [createConfigManager](README.md#createconfigmanager)
- [createEventBus](README.md#createeventbus)
- [createEventReplayer](README.md#createeventreplayer)
- [createI18n](README.md#createi18n)
- [createLocaleManager](README.md#createlocalemanager)
- [createLogger](README.md#createlogger)
- [createServiceContainer](README.md#createservicecontainer)
- [createSnapshotManager](README.md#createsnapshotmanager)
- [createStore](README.md#createstore)
- [createWebSocket](README.md#createwebsocket)
- [cropImage](README.md#cropimage)
- [crossPlatformStorage](README.md#crossplatformstorage)
- [dataSynchronizer](README.md#datasynchronizer)
- [debounce](README.md#debounce)
- [debounceEvent](README.md#debounceevent)
- [debouncePromises](README.md#debouncepromises)
- [decrypt](README.md#decrypt)
- [deepClone](README.md#deepclone)
- [deepClone2](README.md#deepclone2)
- [deepFreeze](README.md#deepfreeze)
- [deepMerge](README.md#deepmerge)
- [deepMergeWithRules](README.md#deepmergewithrules)
- [delegate](README.md#delegate)
- [dependencyInjector](README.md#dependencyinjector)
- [detectBrowser](README.md#detectbrowser)
- [detectDevice](README.md#detectdevice)
- [downloadImage](README.md#downloadimage)
- [dynamicFormValidator](README.md#dynamicformvalidator)
- [encrypt](README.md#encrypt)
- [fadeIn](README.md#fadein)
- [fadeOut](README.md#fadeout)
- [fetchWithTimeout](README.md#fetchwithtimeout)
- [fileToBase64](README.md#filetobase64)
- [fileToBlob](README.md#filetoblob)
- [finiteStateMachine](README.md#finitestatemachine)
- [flatten](README.md#flatten)
- [flipImage](README.md#flipimage)
- [formatDate](README.md#formatdate)
- [generateDynamicForm](README.md#generatedynamicform)
- [generateSecureToken](README.md#generatesecuretoken)
- [getElementOffset](README.md#getelementoffset)
- [getQueryParam](README.md#getqueryparam)
- [groupBy](README.md#groupby)
- [httpGet](README.md#httpget)
- [httpPost](README.md#httppost)
- [httpRequest](README.md#httprequest)
- [imageToBase64](README.md#imagetobase64)
- [isEmail](README.md#isemail)
- [isEmpty](README.md#isempty)
- [isEmptyObject](README.md#isemptyobject)
- [isNumber](README.md#isnumber)
- [isObject](README.md#isobject)
- [isPhoneNumber](README.md#isphonenumber)
- [isURL](README.md#isurl)
- [kebabCase](README.md#kebabcase)
- [lruCache](README.md#lrucache)
- [memoize](README.md#memoize)
- [merge](README.md#merge)
- [mergeAndDeduplicate](README.md#mergeanddeduplicate)
- [observableStream](README.md#observablestream)
- [once](README.md#once)
- [paginate](README.md#paginate)
- [parallelLimit](README.md#parallellimit)
- [pipe](README.md#pipe)
- [policyEvaluator](README.md#policyevaluator)
- [priorityQueue](README.md#priorityqueue)
- [priorityTaskQueue](README.md#prioritytaskqueue)
- [readCSVFile](README.md#readcsvfile)
- [readFile](README.md#readfile)
- [readFileAsText](README.md#readfileastext)
- [resizeImage](README.md#resizeimage)
- [retry](README.md#retry)
- [retryFetch](README.md#retryfetch)
- [reverseString](README.md#reversestring)
- [roleBasedAccessControl](README.md#rolebasedaccesscontrol)
- [rotateImage](README.md#rotateimage)
- [saveFile](README.md#savefile)
- [scrollToElement](README.md#scrolltoelement)
- [sequencer](README.md#sequencer)
- [shuffle](README.md#shuffle)
- [sortByKey](README.md#sortbykey)
- [staggeredSequencer](README.md#staggeredsequencer)
- [strategy](README.md#strategy)
- [taskScheduler](README.md#taskscheduler)
- [throttle](README.md#throttle)
- [toggleClass](README.md#toggleclass)
- [transformTree](README.md#transformtree)
- [truncate](README.md#truncate)
- [unique](README.md#unique)
- [uploadImage](README.md#uploadimage)
- [uuid](README.md#uuid)
- [validateForm](README.md#validateform)
- [validateForm2](README.md#validateform2)
- [validatePassword](README.md#validatepassword)
- [virtualFileSystem](README.md#virtualfilesystem)
- [workerManager](README.md#workermanager)

## Functions

### accessControl

▸ **accessControl**(`userRoles`, `rolePermissions`): `Object`

权限管理工具，用于检查用户是否有权访问特定资源。

**`example`**
const acl = accessControl(['user'], {
  admin: ['create', 'edit', 'delete'],
  user: ['read', 'edit']
});
console.log(acl.canAccess('edit')); // true
acl.addRole('admin');
console.log(acl.canAccess('delete')); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userRoles` | `string`[] | 用户的角色数组。 |
| `rolePermissions` | `Record`<`string`, `string`[]\> | 每个角色的权限映射。 |

#### Returns

`Object`

{{
 canAccess: (permission: string) => boolean,
 addRole: (role: string) => void,
 removeRole: (role: string) => void
}} - 包含检查权限、添加角色和删除角色的方法。

| Name | Type |
| :------ | :------ |
| `addRole` | (`role`: `string`) => `void` |
| `canAccess` | (`permission`: `string`) => `boolean` |
| `removeRole` | (`role`: `string`) => `void` |

#### Defined in

[security/accessControl.ts:21](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/accessControl.ts#L21)

___

### addDays

▸ **addDays**(`date`, `days`): `Date`

为日期对象添加指定天数。

**`example`**
const newDate = addDays(new Date(), 10);
console.log(newDate); // 当前日期加上10天

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | 要操作的日期对象。 |
| `days` | `number` | 要添加的天数。 |

#### Returns

`Date`

添加天数后的新日期对象。

#### Defined in

[date/addDays.ts:12](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/date/addDays.ts#L12)

___

### advancedStrategy

▸ **advancedStrategy**<`T`, `R`\>(): `Object`

高级策略模式实现，支持动态添加策略、条件执行和策略组合。

**`example`**
const strategies = advancedStrategy<number, string>();
strategies.addStrategy('double', n => `Double: ${n * 2}`, n => n > 0);
strategies.addStrategy('square', n => `Square: ${n * n}`);
console.log(strategies.execute('double', 4)); // 输出: Double: 8
console.log(strategies.execute('square', -2)); // 输出: Square: 4

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 策略输入的类型。 |
| `R` | 策略输出的类型。 |

#### Returns

`Object`

{{
  addStrategy: (name: string, strategy: (input: T) => R, condition?: (input: T) => boolean) => void,
  execute: (name: string, input: T) => R
}} - 包含添加策略、条件执行策略和组合策略的方法。

| Name | Type |
| :------ | :------ |
| `addStrategy` | (`name`: `string`, `strategy`: (`input`: `T`) => `R`, `condition?`: (`input`: `T`) => `boolean`) => `void` |
| `execute` | (`name`: `string`, `input`: `T`) => `R` |

#### Defined in

[patterns/advancedStrategy.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/patterns/advancedStrategy.ts#L18)

___

### aggregateBy

▸ **aggregateBy**<`T`, `K`, `V`\>(`array`, `keyFn`, `aggregateFn`): `Record`<`K`, `V`\>

根据指定的键对数组进行聚合处理，并计算每组的汇总数据。

**`example`**
const data = [
  { category: 'fruit', quantity: 10 },
  { category: 'fruit', quantity: 20 },
  { category: 'vegetable', quantity: 15 }
];
const aggregated = aggregateBy(data, item => item.category, group => group.reduce((sum, item) => sum + item.quantity, 0));
console.log(aggregated); // { fruit: 30, vegetable: 15 }

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | 数组元素的类型。 |
| `K` | extends `string` \| `number` | 聚合键的类型。 |
| `V` | `V` | 聚合值的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | 要聚合的数组。 |
| `keyFn` | (`item`: `T`) => `K` | 返回用于分组的键的函数。 |
| `aggregateFn` | (`group`: `T`[]) => `V` | 返回聚合值的函数。 |

#### Returns

`Record`<`K`, `V`\>

聚合后的结果对象。

#### Defined in

[data/aggregateBy.ts:21](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/aggregateBy.ts#L21)

___

### animateElement

▸ **animateElement**(`element`, `animationName`, `duration?`): `Promise`<`void`\>

使用CSS动画动画化指定的元素。

**`example`**
animateElement(document.getElementById('myElement')!, 'bounce', 500).then(() => {
  console.log('Animation finished');
});

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLElement` | `undefined` | 要动画化的元素。 |
| `animationName` | `string` | `undefined` | 动画名称（对应CSS类名）。 |
| `duration` | `number` | `1000` | - |

#### Returns

`Promise`<`void`\>

动画完成后的Promise。

#### Defined in

[animations/animateElement.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/animations/animateElement.ts#L14)

___

### animateScrollTo

▸ **animateScrollTo**(`targetPosition`, `duration`, `element?`): `void`

平滑滚动窗口或元素到目标位置。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetPosition` | `number` | 目标位置（滚动高度）。 |
| `duration` | `number` | 动画持续时间（毫秒）。 |
| `element` | `HTMLElement` | 可选，默认是documentElement，要滚动的元素。 |

#### Returns

`void`

#### Defined in

[animations/animateScrollTo.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/animations/animateScrollTo.ts#L7)

___

### applyWatermark

▸ **applyWatermark**(`imageBlob`, `watermarkText`, `font?`, `color?`, `x?`, `y?`): `Promise`<`Blob`\>

在图像上应用水印

**`example`**
const blob = new Blob(["..."], { type: "image/jpeg" });
applyWatermark(blob, 'My Watermark').then(watermarkedBlob => {
  // Do something with watermarkedBlob
});

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imageBlob` | `Blob` | `undefined` | 原始图片的 Blob 对象 |
| `watermarkText` | `string` | `undefined` | 要应用的水印文本 |
| `font` | `string` | `'30px Arial'` | - |
| `color` | `string` | `'rgba(255, 255, 255, 0.5)'` | - |
| `x` | `number` | `10` | - |
| `y` | `number` | `50` | - |

#### Returns

`Promise`<`Blob`\>

返回添加水印后的图片 Blob 对象

#### Defined in

[images/applyWatermark.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/applyWatermark.ts#L18)

___

### base64ToBlob

▸ **base64ToBlob**(`base64`): `Blob`

将 base64 编码字符串转换为 Blob 对象

**`example`**
const base64 = "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==";
const blob = base64ToBlob(base64);
console.log(blob);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | base64 编码字符串 |

#### Returns

`Blob`

Blob 对象

#### Defined in

[files/base64ToBlob.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/base64ToBlob.ts#L14)

___

### base64ToFile

▸ **base64ToFile**(`base64`, `filename`): `File`

将 base64 编码字符串转换为 File 对象

**`example`**
const base64 = "data:text/plain;base64,SGVsbG8sIHdvcmxkIQ==";
const file = base64ToFile(base64, 'hello.txt');
console.log(file);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | base64 编码字符串 |
| `filename` | `string` | 文件名 |

#### Returns

`File`

File 对象

#### Defined in

[files/base64ToFile.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/base64ToFile.ts#L17)

___

### base64ToImageFile

▸ **base64ToImageFile**(`base64`, `filename`): `File`

将 base64 编码字符串转换为图片文件

**`example`**
const base64 = "data:image/png;base64,iVBORw0KGgoAAAANS...";
const imageFile = base64ToImageFile(base64, 'image.png');
console.log(imageFile);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base64` | `string` | base64 编码字符串 |
| `filename` | `string` | 文件名 |

#### Returns

`File`

图片文件

#### Defined in

[files/base64ToImageFile.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/base64ToImageFile.ts#L17)

___

### batchRequest

▸ **batchRequest**<`T`\>(`requests`, `batchSize`): `Promise`<`T`[]\>

批量发送网络请求，并在所有请求完成后返回结果。

**`example`**
const request1 = () => fetch('/api/data1').then(res => res.json());
const request2 = () => fetch('/api/data2').then(res => res.json());
batchRequest([request1, request2], 1).then(results => console.log(results));

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 请求结果的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requests` | () => `Promise`<`T`\>[] | 包含请求的Promise数组。 |
| `batchSize` | `number` | 每批并发执行的请求数量。 |

#### Returns

`Promise`<`T`[]\>

返回包含所有请求结果的Promise。

#### Defined in

[network/batchRequest.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/network/batchRequest.ts#L14)

___

### blobToBase64

▸ **blobToBase64**(`blob`): `Promise`<`string`\>

将 Blob 对象转换为 base64 编码字符串

**`example`**
const blob = new Blob(["Hello, world!"], { type: "text/plain" });
blobToBase64(blob).then(base64 => console.log(base64));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | Blob 对象 |

#### Returns

`Promise`<`string`\>

base64 编码字符串

#### Defined in

[files/blobToBase64.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/blobToBase64.ts#L13)

___

### blobToFile

▸ **blobToFile**(`blob`, `filename`): `File`

将 Blob 对象转换为 File 对象

**`example`**
const blob = new Blob(["Hello, world!"], { type: "text/plain" });
const file = blobToFile(blob, 'hello.txt');
console.log(file);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | Blob 对象 |
| `filename` | `string` | 文件名 |

#### Returns

`File`

File 对象

#### Defined in

[files/blobToFile.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/blobToFile.ts#L15)

___

### cacheWithTTL

▸ **cacheWithTTL**<`T`\>(`ttl`): `Object`

创建一个带有TTL（生存时间）的缓存。

**`example`**
const cache = cacheWithTTL<number>(5000);
cache.set('key', 100);
console.log(cache.get('key')); // 100
setTimeout(() => console.log(cache.get('key')), 6000); // undefined

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 缓存值的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ttl` | `number` | 缓存生存时间（毫秒）。 |

#### Returns

`Object`

{{
 set: (key: string, value: T) => void,
 get: (key: string) => T | undefined,
 remove: (key: string) => void,
 clear: () => void
}} - 包含设置、获取、删除和清除缓存的方法。

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `get` | (`key`: `string`) => `T` \| `undefined` |
| `remove` | (`key`: `string`) => `void` |
| `set` | (`key`: `string`, `value`: `T`) => `void` |

#### Defined in

[cache/cacheWithTTL.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/cache/cacheWithTTL.ts#L19)

___

### camelCaseToSnakeCase

▸ **camelCaseToSnakeCase**(`str`): `string`

将驼峰命名转换为蛇形命名。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 需要转换的驼峰命名字符串。 |

#### Returns

`string`

转换后的蛇形命名字符串。

#### Defined in

[string/camelCaseToSnakeCase.ts:6](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/string/camelCaseToSnakeCase.ts#L6)

___

### capitalize

▸ **capitalize**(`str`): `string`

将字符串的首字母大写。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 要转换的字符串。 |

#### Returns

`string`

首字母大写后的字符串。

#### Defined in

[string/capitalize.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/string/capitalize.ts#L7)

___

### chunk

▸ **chunk**<`T`\>(`array`, `size`): `T`[][]

将数组按指定大小分块。

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | 要分块的数组。 |
| `size` | `number` | 每块的大小。 |

#### Returns

`T`[][]

分块后的数组。

#### Defined in

[array/chunk.ts:8](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/array/chunk.ts#L8)

___

### clamp

▸ **clamp**(`value`, `min`, `max`): `number`

限制数字在指定的范围内。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | 要限制的数字。 |
| `min` | `number` | 最小值。 |
| `max` | `number` | 最大值。 |

#### Returns

`number`

被限制在范围内的数字。

#### Defined in

[number/clamp.ts:9](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/number/clamp.ts#L9)

___

### compressImage

▸ **compressImage**(`imageFile`, `quality`): `Promise`<`Blob`\>

压缩图片

**`example`**
const imageFile = new File(["..."], "image.png", { type: "image/png" });
compressImage(imageFile, 0.8).then(blob => console.log(blob));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageFile` | `File` | 图片文件 |
| `quality` | `number` | 压缩质量（0 - 1） |

#### Returns

`Promise`<`Blob`\>

压缩后的图片 Blob 对象

#### Defined in

[images/compressImage.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/compressImage.ts#L14)

___

### copyToClipboard

▸ **copyToClipboard**(`text`): `Promise`<`void`\>

将文本复制到剪贴板。

**`example`**
copyToClipboard('Hello World').then(() => console.log('Text copied!'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 要复制的文本。 |

#### Returns

`Promise`<`void`\>

复制操作的Promise。

#### Defined in

[browser/copyToClipboard.ts:10](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/browser/copyToClipboard.ts#L10)

___

### createBreakpoints

▸ **createBreakpoints**(`breakpoints`): `Object`

响应式断点工具，用于检测当前窗口大小是否符合指定的断点。

**`example`**
const responsive = createBreakpoints({ mobile: 480, tablet: 768, desktop: 1024 });
console.log(responsive.match('mobile')); // true 或 false
responsive.onChange(() => console.log('Viewport size changed'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `breakpoints` | `Record`<`string`, `number`\> | 断点配置，键为断点名称，值为宽度阈值。 |

#### Returns

`Object`

{{
  match: (breakpoint: string) => boolean,
  onChange: (callback: () => void) => void
}} - 包含匹配断点和窗口大小变化时触发回调的方法。

| Name | Type |
| :------ | :------ |
| `match` | (`breakpoint`: `string`) => `boolean` |
| `onChange` | (`callback`: () => `void`) => `void` |

#### Defined in

[responsive/breakpoints.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/responsive/breakpoints.ts#L15)

___

### createConfigManager

▸ **createConfigManager**<`T`\>(`fetchConfig`, `refreshInterval?`): `Object`

动态配置管理器，用于管理和应用动态加载的配置。

**`example`**
const configManager = createConfigManager(() => fetch('/api/config').then(res => res.json()), 60000);
configManager.onUpdate((config) => console.log('Config updated:', config));
configManager.reload(); // 手动触发配置加载

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 配置的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fetchConfig` | () => `Promise`<`T`\> | 异步获取配置的函数。 |
| `refreshInterval?` | `number` | - |

#### Returns

`Object`

{{
  getConfig: () => T | undefined,
  reload: () => Promise<void>,
  onUpdate: (callback: (config: T) => void) => void
}} - 包含获取当前配置、重新加载配置和注册配置更新回调的方法。

| Name | Type |
| :------ | :------ |
| `getConfig` | () => `T` \| `undefined` |
| `onUpdate` | (`callback`: (`config`: `T`) => `void`) => `void` |
| `reload` | () => `Promise`<`void`\> |

#### Defined in

[config/configManager.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/config/configManager.ts#L18)

___

### createEventBus

▸ **createEventBus**<`E`, `P`\>(): `Object`

简单的事件总线（Event Bus），用于在不同组件之间传递事件。

**`example`**
const eventBus = createEventBus<string, number>();
const listener = (payload: number) => console.log('Received:', payload);
eventBus.on('event1', listener);
eventBus.emit('event1', 42); // Console: 'Received: 42'
eventBus.off('event1', listener);

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | extends `string` \| `symbol` | 事件类型。 |
| `P` | `P` | 事件参数类型。 |

#### Returns

`Object`

{{
  on: (event: E, callback: (payload: P) => void) => void,
  off: (event: E, callback: (payload: P) => void) => void,
  emit: (event: E, payload: P) => void
}} - 包含注册事件、注销事件和触发事件的方法。

| Name | Type |
| :------ | :------ |
| `emit` | (`event`: `E`, `payload`: `P`) => `void` |
| `off` | (`event`: `E`, `callback`: (`payload`: `P`) => `void`) => `void` |
| `on` | (`event`: `E`, `callback`: (`payload`: `P`) => `void`) => `void` |

#### Defined in

[events/eventBus.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/events/eventBus.ts#L19)

___

### createEventReplayer

▸ **createEventReplayer**<`E`\>(): `Object`

事件重放系统，用于记录和重放应用中的事件。

**`example`**
const eventReplayer = createEventReplayer<{ type: string, payload: any }>();
eventReplayer.record({ type: 'click', payload: { x: 10, y: 20 } });
eventReplayer.record({ type: 'scroll', payload: { scrollTop: 100 } });
eventReplayer.replay(); // 重放记录的事件

#### Type parameters

| Name | Description |
| :------ | :------ |
| `E` | 事件类型。 |

#### Returns

`Object`

{{
  record: (event: E) => void,
  replay: () => void,
  clear: () => void
}} - 包含记录事件、重放事件和清除事件的方法。

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `record` | (`event`: `E`) => `void` |
| `replay` | () => `void` |

#### Defined in

[events/eventReplayer.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/events/eventReplayer.ts#L17)

___

### createI18n

▸ **createI18n**(`translations`, `defaultLocale`): `Object`

创建一个简单的国际化（i18n）处理工具。

**`example`**
const i18n = createI18n({
  en: { hello: "Hello" },
  fr: { hello: "Bonjour" }
}, 'en');
console.log(i18n.t('hello')); // "Hello"
i18n.setLocale('fr');
console.log(i18n.t('hello')); // "Bonjour"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `translations` | `Record`<`string`, `Record`<`string`, `string`\>\> | 包含各语言的翻译字典。 |
| `defaultLocale` | `string` | 默认语言代码。 |

#### Returns

`Object`

{{
 setLocale: (locale: string) => void,
 t: (key: string) => string
}} - 包含设置当前语言和翻译字符串的方法。

| Name | Type |
| :------ | :------ |
| `setLocale` | (`locale`: `string`) => `void` |
| `t` | (`key`: `string`) => `string` |

#### Defined in

[i18n/createI18n.ts:20](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/i18n/createI18n.ts#L20)

___

### createLocaleManager

▸ **createLocaleManager**<`T`\>(`loadLocales`): `Object`

国际化管理器，用于动态加载和切换语言包。

**`example`**
const localeManager = createLocaleManager(() => fetch('/locales').then(res => res.json()));
localeManager.setLocale('en');
console.log(localeManager.t('hello')); // 输出: Hello

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 语言包的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loadLocales` | () => `Promise`<`Record`<`string`, `T`\>\> | 异步加载所有语言包的函数。 |

#### Returns

`Object`

{{
  setLocale: (locale: string) => void,
  t: (key: keyof T) => string
}} - 包含设置当前语言和翻译字符串的方法。

| Name | Type |
| :------ | :------ |
| `setLocale` | (`locale`: `string`) => `void` |
| `t` | (`key`: keyof `T`) => `string` |

#### Defined in

[i18n/localeManager.ts:16](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/i18n/localeManager.ts#L16)

___

### createLogger

▸ **createLogger**(`context`): `Object`

日志记录器，用于记录和管理应用程序中的日志信息。

**`example`**
const logger = createLogger('MyApp');
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.setLevel('warn');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `string` | 日志记录器的上下文名称。 |

#### Returns

`Object`

{{
  info: (message: string, ...data: any[]) => void,
  warn: (message: string, ...data: any[]) => void,
  error: (message: string, ...data: any[]) => void,
  setLevel: (level: 'info' | 'warn' | 'error') => void
}} - 包含记录信息、警告和错误日志的方法，以及设置日志级别的方法。

| Name | Type |
| :------ | :------ |
| `error` | (`message`: `string`, ...`data`: `any`[]) => `void` |
| `info` | (`message`: `string`, ...`data`: `any`[]) => `void` |
| `setLevel` | (`newLevel`: ``"error"`` \| ``"info"`` \| ``"warn"``) => `void` |
| `warn` | (`message`: `string`, ...`data`: `any`[]) => `void` |

#### Defined in

[logging/logger.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/logging/logger.ts#L19)

___

### createServiceContainer

▸ **createServiceContainer**(): `Object`

服务容器，用于注册和解析应用程序中的服务实例。

**`example`**
const container = createServiceContainer();
container.register('logger', new Logger());
const logger = container.resolve<Logger>('logger');
logger.log('Service resolved');

#### Returns

`Object`

{{
  register: <T>(name: string, service: T) => void,
  resolve: <T>(name: string) => T,
  hasService: (name: string) => boolean
}} - 包含注册、解析和检查服务的方法。

| Name | Type |
| :------ | :------ |
| `hasService` | (`name`: `string`) => `boolean` |
| `register` | <T\>(`name`: `string`, `service`: `T`) => `void` |
| `resolve` | <T\>(`name`: `string`) => `T` |

#### Defined in

[di/serviceContainer.ts:16](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/di/serviceContainer.ts#L16)

___

### createSnapshotManager

▸ **createSnapshotManager**<`T`\>(): `Object`

数据快照管理器，用于管理数据的快照和回滚。

**`example`**
const snapshotManager = createSnapshotManager<{ count: number }>();
snapshotManager.takeSnapshot({ count: 1 });
snapshotManager.takeSnapshot({ count: 2 });
console.log(snapshotManager.rollback()); // { count: 2 }
console.log(snapshotManager.rollback()); // { count: 1 }

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 数据类型。 |

#### Returns

`Object`

{{
  takeSnapshot: (data: T) => void,
  rollback: () => T | undefined,
  clearSnapshots: () => void
}} - 包含创建快照、回滚和清除快照的方法。

| Name | Type |
| :------ | :------ |
| `clearSnapshots` | () => `void` |
| `rollback` | () => `T` \| `undefined` |
| `takeSnapshot` | (`data`: `T`) => `void` |

#### Defined in

[data/snapshotManager.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/snapshotManager.ts#L18)

___

### createStore

▸ **createStore**<`T`\>(`initialState`): `Object`

创建一个简单的状态管理存储器。

**`example`**
const store = createStore({ count: 0 });
store.subscribe((state) => console.log('State updated:', state));
store.setState({ count: store.getState().count + 1 });
console.log(store.getState()); // { count: 1 }

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 存储器状态的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | `T` | 初始状态。 |

#### Returns

`Object`

{{
 getState: () => T,
 setState: (newState: Partial<T>) => void,
 subscribe: (listener: (state: T) => void) => () => void
}} - 包含获取状态、设置状态和订阅状态变化的方法。

| Name | Type |
| :------ | :------ |
| `getState` | () => `T` |
| `setState` | (`newState`: `Partial`<`T`\>) => `void` |
| `subscribe` | (`listener`: (`state`: `T`) => `void`) => () => `void` |

#### Defined in

[state/createStore.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/state/createStore.ts#L18)

___

### createWebSocket

▸ **createWebSocket**(`url`, `eventHandlers`): `Object`

创建并管理一个WebSocket连接。

**`example`**
const ws = createWebSocket('ws://example.com/socket', {
  open: () => console.log('WebSocket connection opened'),
  message: (data) => console.log('Received:', data),
  close: () => console.log('WebSocket connection closed'),
  error: (error) => console.error('WebSocket error:', error)
});
ws.send({ action: 'subscribe', channel: 'updates' });

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | WebSocket服务器的URL。 |
| `eventHandlers` | `any` | WebSocket事件的处理程序。 |

#### Returns

`Object`

{{
 send: (message: any) => void,
 close: () => void
}} - 包含发送消息和关闭连接的方法。

| Name | Type |
| :------ | :------ |
| `close` | () => `void` |
| `send` | (`message`: `any`) => `void` |

#### Defined in

[network/createWebSocket.ts:20](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/network/createWebSocket.ts#L20)

___

### cropImage

▸ **cropImage**(`imageBlob`, `startX`, `startY`, `width`, `height`): `Promise`<`Blob`\>

裁剪图像

**`example`**
const blob = new Blob(["..."], { type: "image/jpeg" });
cropImage(blob, 10, 10, 200, 200).then(croppedBlob => {
  // Do something with croppedBlob
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageBlob` | `Blob` | 原始图片的 Blob 对象 |
| `startX` | `number` | 裁剪区域的起始 x 坐标 |
| `startY` | `number` | 裁剪区域的起始 y 坐标 |
| `width` | `number` | 裁剪区域的宽度 |
| `height` | `number` | 裁剪区域的高度 |

#### Returns

`Promise`<`Blob`\>

返回裁剪后的图片 Blob 对象

#### Defined in

[images/cropImage.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/cropImage.ts#L17)

___

### crossPlatformStorage

▸ **crossPlatformStorage**<`T`\>(`storageType`): `Object`

跨平台存储工具，自动选择最佳的存储方式（localStorage、sessionStorage、内存存储）。

**`example`**
const storage = crossPlatformStorage<number>('local');
storage.setItem('key', 42);
console.log(storage.getItem('key')); // 42

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 存储数据的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `storageType` | ``"local"`` \| ``"session"`` \| ``"memory"`` | 存储类型，可选 'local'、'session' 或 'memory'。 |

#### Returns

`Object`

{{
  setItem: (key: string, value: T) => void,
  getItem: (key: string) => T | undefined,
  removeItem: (key: string) => void,
  clear: () => void
}} - 包含设置、获取、删除和清除存储项的方法。

| Name | Type |
| :------ | :------ |
| `clear` | () => `void` |
| `getItem` | (`key`: `string`) => `T` \| `undefined` |
| `removeItem` | (`key`: `string`) => `void` |
| `setItem` | (`key`: `string`, `value`: `T`) => `void` |

#### Defined in

[storage/crossPlatformStorage.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/storage/crossPlatformStorage.ts#L18)

___

### dataSynchronizer

▸ **dataSynchronizer**<`T`\>(`fetchData`, `updateLocal`, `compare`): `Promise`<`void`\>

数据同步器，用于在不同的数据源之间保持数据同步。

**`example`**
const fetchData = async () => fetch('/api/data').then(res => res.json());
const updateLocal = async (data) => localStorage.setItem('data', JSON.stringify(data));
const compare = (data) => JSON.stringify(data) !== localStorage.getItem('data');
dataSynchronizer(fetchData, updateLocal, compare).then(() => console.log('Data synchronized'));

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 数据类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fetchData` | () => `Promise`<`T`\> | 从远程数据源获取数据的函数。 |
| `updateLocal` | (`data`: `T`) => `Promise`<`void`\> | 更新本地数据的函数。 |
| `compare` | (`data`: `T`) => `boolean` | 比较本地数据和远程数据的函数，返回是否需要同步。 |

#### Returns

`Promise`<`void`\>

返回一个Promise，表示同步完成。

#### Defined in

[sync/dataSynchronizer.ts:16](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/sync/dataSynchronizer.ts#L16)

___

### debounce

▸ **debounce**(`func`, `delay`): (...`args`: `any`[]) => `void`

防抖函数，在指定时间内没有新的调用时才执行。

**`example`**
const debouncedFunc = debounce(() => { console.log('Called'); }, 300);
window.addEventListener('scroll', debouncedFunc);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (...`args`: `any`[]) => `void` | 需要防抖的函数。 |
| `delay` | `number` | 延迟时间（毫秒）。 |

#### Returns

`fn`

防抖后的函数。

▸ (...`args`): `void`

防抖函数，在指定时间内没有新的调用时才执行。

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

防抖后的函数。

#### Defined in

[performance/debounce.ts:12](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/performance/debounce.ts#L12)

___

### debounceEvent

▸ **debounceEvent**(`callback`, `delay`): (...`args`: `any`[]) => `void`

为事件处理程序添加防抖功能，限制事件处理程序的触发频率。

**`example`**
const debouncedClick = debounceEvent(() => {
  console.log('Button clicked');
}, 300);
document.getElementById('myButton')!.addEventListener('click', debouncedClick);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`args`: `any`[]) => `void` | 原始事件处理程序。 |
| `delay` | `number` | 防抖延迟时间（毫秒）。 |

#### Returns

`fn`

包含防抖功能的新事件处理程序。

▸ (...`args`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

#### Defined in

[events/debounceEvent.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/events/debounceEvent.ts#L14)

___

### debouncePromises

▸ **debouncePromises**(`fn`, `wait`): (...`args`: `any`[]) => `Promise`<`unknown`\>

防抖 Promise 的执行，限制在指定时间内只执行最后一个请求

**`example`**
const fetchData = (query) => fetch(`https://api.example.com/search?q=${query}`);
const debouncedFetch = debouncePromises(fetchData, 300);
debouncedFetch('term').then(response => console.log(response));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (...`args`: `any`[]) => `Promise`<`any`\> | 返回 Promise 的函数 |
| `wait` | `number` | 防抖的等待时间 (毫秒) |

#### Returns

`fn`

返回处理后的函数

▸ (...`args`): `Promise`<`unknown`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`Promise`<`unknown`\>

#### Defined in

[data/debouncePromises.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/debouncePromises.ts#L13)

___

### decrypt

▸ **decrypt**(`text`, `shift`): `string`

简单的解密函数（Caesar Cipher）

**`example`**
const decrypted = decrypt('khoor', 3); // hello

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 要解密的文本 |
| `shift` | `number` | 位移量 |

#### Returns

`string`

解密后的文本

#### Defined in

[security/encrypt.ts:30](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/encrypt.ts#L30)

___

### deepClone

▸ **deepClone**<`T`\>(`obj`): `T`

深度克隆一个对象。

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | 要克隆的对象。 |

#### Returns

`T`

克隆后的对象。

#### Defined in

[object/deepClone.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/object/deepClone.ts#L7)

___

### deepClone2

▸ **deepClone2**<`T`\>(`obj`): `T`

深度克隆一个对象或数组。

**`example`**
const original = { a: 1, b: { c: 2 } };
const clone = deepClone(original);
console.log(clone); // { a: 1, b: { c: 2 } }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | 要克隆的对象或数组。 |

#### Returns

`T`

克隆后的新对象或数组。

#### Defined in

[utility/deepClone.ts:12](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/utility/deepClone.ts#L12)

___

### deepFreeze

▸ **deepFreeze**<`T`\>(`obj`): `T`

递归地冻结对象，防止其被修改。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | 要冻结的对象。 |

#### Returns

`T`

返回被冻结的对象。

#### Defined in

[data/deepFreeze.ts:6](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/deepFreeze.ts#L6)

___

### deepMerge

▸ **deepMerge**<`T`\>(...`objects`): `any`

深度合并多个对象。

**`example`**
const obj1 = { a: 1, b: { x: 1 } };
const obj2 = { b: { y: 2 }, c: 3 };
const merged = deepMerge(obj1, obj2);
console.log(merged); // { a: 1, b: { x: 1, y: 2 }, c: 3 }

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 对象的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...objects` | `Partial`<`T`\>[] | 需要合并的多个对象。 |

#### Returns

`any`

合并后的对象。

#### Defined in

[data/deepMerge.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/deepMerge.ts#L14)

___

### deepMergeWithRules

▸ **deepMergeWithRules**<`T`\>(`objects`, `rules`): `T`

深度合并对象，根据自定义规则处理冲突。

**`example`**
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 2, b: { d: 3 } };
const rules = {
  a: (x, y) => x + y,
  'b.c': (x, y) => Math.max(x, y)
};
const merged = deepMergeWithRules([obj1, obj2], rules);
console.log(merged); // { a: 3, b: { c: 2, d: 3 } }

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 对象的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects` | `T`[] | 要合并的对象数组。 |
| `rules` | `Record`<`string`, (`a`: `any`, `b`: `any`) => `any`\> | 冲突处理规则映射表，键为对象属性，值为合并函数。 |

#### Returns

`T`

返回合并后的新对象。

#### Defined in

[data/deepMergeWithRules.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/deepMergeWithRules.ts#L19)

___

### delegate

▸ **delegate**(`parent`, `selector`, `eventType`, `callback`): `void`

事件委托

**`example`**
delegate(document.body, 'button', 'click', (event) => {
  console.log('Button clicked:', event.target);
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `Element` | 父元素 |
| `selector` | `string` | 目标子元素的选择器 |
| `eventType` | `string` | 事件类型 |
| `callback` | (`event`: `Event`) => `void` | 事件触发时的回调函数 |

#### Returns

`void`

#### Defined in

[events/delegate.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/events/delegate.ts#L14)

___

### dependencyInjector

▸ **dependencyInjector**<`T`\>(): `Object`

依赖注入器，用于管理和注入依赖项。

**`example`**
const di = dependencyInjector<{ db: Database, logger: Logger }>();
di.provide('db', new Database());
di.provide('logger', new Logger());
const db = di.inject('db');
const logger = di.inject('logger');

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends `Record`<`string`, `any`\> | 依赖项的类型映射。 |

#### Returns

`Object`

{{
  provide: <K extends keyof T>(key: K, value: T[K]) => void,
  resolve: <K extends keyof T>(key: K) => T[K],
  inject: <K extends keyof T>(key: K) => T[K]
}} - 包含提供、解析和注入依赖项的方法。

| Name | Type |
| :------ | :------ |
| `inject` | <K\>(`key`: `K`) => `T`[`K`] |
| `provide` | <K\>(`key`: `K`, `value`: `T`[`K`]) => `void` |
| `resolve` | <K\>(`key`: `K`) => `T`[`K`] |

#### Defined in

[di/dependencyInjector.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/di/dependencyInjector.ts#L18)

___

### detectBrowser

▸ **detectBrowser**(): `Object`

检测用户当前使用的浏览器类型及版本。

#### Returns

`Object`

包含浏览器名称和版本的对象。

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version` | `string` |

#### Defined in

[browser/detectBrowser.ts:5](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/browser/detectBrowser.ts#L5)

___

### detectDevice

▸ **detectDevice**(): ``"desktop"`` \| ``"tablet"`` \| ``"mobile"``

检测用户的设备类型（桌面、平板、手机）。

**`example`**
const deviceType = detectDevice();
console.log(deviceType); // 'mobile'（根据实际设备返回）

#### Returns

``"desktop"`` \| ``"tablet"`` \| ``"mobile"``

返回检测到的设备类型。

#### Defined in

[browser/detectDevice.ts:10](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/browser/detectDevice.ts#L10)

___

### downloadImage

▸ **downloadImage**(`blob`, `filename`): `void`

生成图片文件的下载链接并自动触发下载

**`example`**
const blob = new Blob(["..."], { type: "image/png" });
downloadImage(blob, 'download.png');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blob` | `Blob` | 图片 Blob 对象 |
| `filename` | `string` | 文件名 |

#### Returns

`void`

#### Defined in

[images/downloadImage.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/downloadImage.ts#L13)

___

### dynamicFormValidator

▸ **dynamicFormValidator**<`T`\>(`validators?`): `Object`

动态表单验证器，用于处理和验证动态生成的表单。

**`example`**
const formValidator = dynamicFormValidator<{ username: string, email: string }>();
formValidator.addValidator('username', value => value.length < 3 ? 'Username too short' : null);
formValidator.addValidator('email', value => !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email' : null);
const result = formValidator.validate({ username: 'John', email: 'john@example.com' });
console.log(result); // { isValid: true, errors: {} }

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 表单字段类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `validators` | `Record`<keyof `T`, (`value`: `any`) => ``null`` \| `string`\> | 每个字段的验证规则。 |

#### Returns

`Object`

{{
  validate: (formData: T) => { isValid: boolean, errors: Partial<Record<keyof T, string>> },
  addValidator: (field: keyof T, validator: (value: any) => string | null) => void
}} - 包含验证表单数据和动态添加验证规则的方法。

| Name | Type |
| :------ | :------ |
| `addValidator` | (`field`: keyof `T`, `validator`: (`value`: `any`) => ``null`` \| `string`) => `void` |
| `validate` | (`formData`: `T`) => { `errors`: `Partial`<`Record`<keyof `T`, `string`\>\> ; `isValid`: `boolean`  } |

#### Defined in

[forms/dynamicFormValidator.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/forms/dynamicFormValidator.ts#L18)

___

### encrypt

▸ **encrypt**(`text`, `shift`): `string`

简单的加密函数（Caesar Cipher）

**`example`**
const encrypted = encrypt('hello', 3); // khoor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | 要加密的文本 |
| `shift` | `number` | 位移量 |

#### Returns

`string`

加密后的文本

#### Defined in

[security/encrypt.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/encrypt.ts#L13)

___

### fadeIn

▸ **fadeIn**(`element`, `duration?`): `void`

使元素淡入显示。

**`example`**
fadeIn(document.getElementById('myElement')!, 500);

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLElement` | `undefined` | 要淡入的元素。 |
| `duration` | `number` | `400` | - |

#### Returns

`void`

#### Defined in

[ui/fadeIn.ts:10](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/ui/fadeIn.ts#L10)

___

### fadeOut

▸ **fadeOut**(`element`, `duration?`): `void`

使元素淡出隐藏。

**`example`**
fadeOut(document.getElementById('myElement')!, 500);

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLElement` | `undefined` | 要淡出的元素。 |
| `duration` | `number` | `400` | - |

#### Returns

`void`

#### Defined in

[ui/fadeOut.ts:10](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/ui/fadeOut.ts#L10)

___

### fetchWithTimeout

▸ **fetchWithTimeout**(`url`, `options?`, `timeout`): `Promise`<`Response`\>

带超时限制的fetch请求。

**`example`**
fetchWithTimeout('https://api.example.com/data', {}, 5000)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Request failed or timed out', error));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 请求的URL。 |
| `options` | `RequestInit` | - |
| `timeout` | `number` | 请求的超时时间（毫秒）。 |

#### Returns

`Promise`<`Response`\>

请求的响应。

#### Defined in

[network/fetchWithTimeout.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/network/fetchWithTimeout.ts#L15)

___

### fileToBase64

▸ **fileToBase64**(`file`): `Promise`<`string`\>

将文件转换为 base64 编码字符串

**`example`**
const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
fileToBase64(file).then(base64 => console.log(base64));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 要转换的文件 |

#### Returns

`Promise`<`string`\>

base64 编码字符串

#### Defined in

[files/fileToBase64.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/fileToBase64.ts#L13)

___

### fileToBlob

▸ **fileToBlob**(`file`): `Promise`<`Blob`\>

将文件转换为 Blob 对象

**`example`**
const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
fileToBlob(file).then(blob => console.log(blob));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 要转换的文件 |

#### Returns

`Promise`<`Blob`\>

Blob 对象

#### Defined in

[files/fileToBlob.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/fileToBlob.ts#L13)

___

### finiteStateMachine

▸ **finiteStateMachine**<`S`, `E`\>(`config`): `Object`

有限状态机，用于管理复杂的状态转换。

**`example`**
const fsm = finiteStateMachine({
  initial: 'idle',
  states: {
    idle: { on: { START: 'running' } },
    running: { on: { STOP: 'idle' } }
  }
});
console.log(fsm.getState()); // 'idle'
fsm.transition('START');
console.log(fsm.getState()); // 'running'

#### Type parameters

| Name | Description |
| :------ | :------ |
| `S` | 状态类型。 |
| `E` | 事件类型。 |

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Object` |
| `config.initial` | `S` |
| `config.states` | `Record`<`any`, `any`\> |

#### Returns

`Object`

{{
  getState: () => S,
  transition: (event: E) => void
}} - 包含获取当前状态和触发状态转换的方法。

| Name | Type |
| :------ | :------ |
| `getState` | () => `S` |
| `transition` | (`event`: `E`) => `void` |

#### Defined in

[state/finiteStateMachine.ts:27](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/state/finiteStateMachine.ts#L27)

___

### flatten

▸ **flatten**<`T`\>(`array`): `T`[]

将嵌套的数组展平成一个单一数组。

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `any`[] | 要展平的数组。 |

#### Returns

`T`[]

展平后的数组。

#### Defined in

[array/flatten.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/array/flatten.ts#L7)

___

### flipImage

▸ **flipImage**(`imageBlob`, `horizontal?`, `vertical?`): `Promise`<`Blob`\>

翻转图像（水平或垂直）

**`example`**
const blob = new Blob(["..."], { type: "image/jpeg" });
flipImage(blob, true, false).then(flippedBlob => {
  // Do something with flippedBlob
});

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `imageBlob` | `Blob` | `undefined` | 原始图片的 Blob 对象 |
| `horizontal` | `boolean` | `true` | - |
| `vertical` | `boolean` | `false` | - |

#### Returns

`Promise`<`Blob`\>

返回翻转后的图片 Blob 对象

#### Defined in

[images/flipImage.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/flipImage.ts#L15)

___

### formatDate

▸ **formatDate**(`date`, `format`): `string`

将日期格式化为指定的字符串格式。

**`example`**
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate); // 例如：2024-08-09

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `date` | `Date` | 要格式化的日期对象。 |
| `format` | `string` | 格式字符串，例如 "YYYY-MM-DD"。 |

#### Returns

`string`

格式化后的日期字符串。

#### Defined in

[date/formatDate.ts:12](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/date/formatDate.ts#L12)

___

### generateDynamicForm

▸ **generateDynamicForm**<`T`\>(`formData`, `labels`, `validators`, `formElement`): `void`

动态生成并验证表单。

**`example`**
const formData = { username: '', password: '' };
const labels = { username: 'Username', password: 'Password' };
const validators = {
  username: (value: string) => value.length < 3 ? 'Username too short' : null,
  password: (value: string) => value.length < 6 ? 'Password too short' : null,
};
generateDynamicForm(formData, labels, validators, document.getElementById('myForm')!);

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 表单数据的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formData` | `T` | 表单数据对象。 |
| `labels` | `Record`<keyof `T`, `string`\> | 每个字段的标签。 |
| `validators` | `Record`<keyof `T`, (`value`: `any`) => ``null`` \| `string`\> | 每个字段的验证规则。 |
| `formElement` | `HTMLFormElement` | 要填充的表单元素。 |

#### Returns

`void`

#### Defined in

[forms/generateDynamicForm.ts:22](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/forms/generateDynamicForm.ts#L22)

___

### generateSecureToken

▸ **generateSecureToken**(`length?`): `string`

生成一个安全的随机令牌。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `length` | `number` | `32` | 令牌的长度，默认为32。 |

#### Returns

`string`

生成的随机令牌字符串。

#### Defined in

[security/generateSecureToken.ts:6](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/generateSecureToken.ts#L6)

___

### getElementOffset

▸ **getElementOffset**(`element`): `Object`

获取元素相对于页面的偏移量（包括滚动）。

**`example`**
const offset = getElementOffset(document.getElementById('myElement')!);
console.log(offset); // { top: 100, left: 50 }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | 要获取偏移量的元素。 |

#### Returns

`Object`

元素的顶部和左侧的偏移量。

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[dom/getElementOffset.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/dom/getElementOffset.ts#L11)

___

### getQueryParam

▸ **getQueryParam**(`paramName`): `string` \| ``null``

从URL中获取指定的查询参数值。

**`example`**
const value = getQueryParam('token');
console.log(value); // 例如：'abc123'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `paramName` | `string` | 要获取的查询参数名称。 |

#### Returns

`string` \| ``null``

查询参数的值，如果不存在则返回null。

#### Defined in

[browser/getQueryParam.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/browser/getQueryParam.ts#L11)

___

### groupBy

▸ **groupBy**<`T`\>(`array`, `keyGetter`): `Record`<`string`, `T`[]\>

根据指定的键对数组进行分组

**`example`**
const data = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' },
];
const grouped = groupBy(data, item => item.category);
console.log(grouped);
// {
//   fruit: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }],
//   vegetable: [{ category: 'vegetable', name: 'carrot' }]
// }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | 输入数组 |
| `keyGetter` | (`item`: `T`) => `string` | 用于获取分组键的函数 |

#### Returns

`Record`<`string`, `T`[]\>

分组后的对象

#### Defined in

[data/groupBy.ts:24](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/groupBy.ts#L24)

___

### httpGet

▸ **httpGet**(`url`): `Promise`<`any`\>

GET 请求

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 请求 URL |

#### Returns

`Promise`<`any`\>

请求结果

#### Defined in

[http/httpRequest.ts:34](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/http/httpRequest.ts#L34)

___

### httpPost

▸ **httpPost**(`url`, `body`): `Promise`<`any`\>

POST 请求

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 请求 URL |
| `body` | `any` | 请求体 |

#### Returns

`Promise`<`any`\>

请求结果

#### Defined in

[http/httpRequest.ts:45](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/http/httpRequest.ts#L45)

___

### httpRequest

▸ **httpRequest**(`url`, `options?`): `Promise`<`any`\>

发起 HTTP 请求

**`example`**
httpRequest('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data))
  .catch(error => console.error(error));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 请求 URL |
| `options?` | `RequestInit` | - |

#### Returns

`Promise`<`any`\>

请求结果

#### Defined in

[http/httpRequest.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/http/httpRequest.ts#L15)

___

### imageToBase64

▸ **imageToBase64**(`imageFile`): `Promise`<`string`\>

将图片文件转换为 base64 编码字符串

**`example`**
const imageFile = new File(["..."], "image.png", { type: "image/png" });
imageToBase64(imageFile).then(base64 => console.log(base64));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageFile` | `File` | 图片文件 |

#### Returns

`Promise`<`string`\>

base64 编码字符串

#### Defined in

[files/imageToBase64.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/imageToBase64.ts#L15)

___

### isEmail

▸ **isEmail**(`email`): `boolean`

验证字符串是否为有效的电子邮件格式

**`example`**
const valid = isEmail('test@example.com');
console.log(valid); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `email` | `string` | 需要验证的电子邮件字符串 |

#### Returns

`boolean`

返回是否为有效的电子邮件

#### Defined in

[validation/isEmail.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/validation/isEmail.ts#L11)

___

### isEmpty

▸ **isEmpty**(`value`): `boolean`

检查对象、数组、字符串或 Map 是否为空

**`example`**
const empty = isEmpty([]);
console.log(empty); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 需要检查的值 |

#### Returns

`boolean`

返回是否为空

#### Defined in

[validation/isEmpty.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/validation/isEmpty.ts#L11)

___

### isEmptyObject

▸ **isEmptyObject**(`obj`): `boolean`

检查对象是否为空（没有可枚举的属性）。

**`example`**
const isEmpty = isEmptyObject({});
console.log(isEmpty); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | 要检查的对象。 |

#### Returns

`boolean`

如果对象为空则返回true，否则返回false。

#### Defined in

[utility/isEmptyObject.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/utility/isEmptyObject.ts#L11)

___

### isNumber

▸ **isNumber**(`value`): value is number

检查一个值是否为数字。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | 要检查的值。 |

#### Returns

value is number

如果是数字则返回 true，否则返回 false。

#### Defined in

[number/isNumber.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/number/isNumber.ts#L7)

___

### isObject

▸ **isObject**(`item`): item is object

检查一个值是否为对象。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | 要检查的值。 |

#### Returns

item is object

如果是对象则返回 true，否则返回 false。

#### Defined in

[object/merge.ts:35](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/object/merge.ts#L35)

___

### isPhoneNumber

▸ **isPhoneNumber**(`phoneNumber`): `boolean`

验证给定的字符串是否为有效的电话号码。

**`example`**
const isValid = isPhoneNumber('+1234567890');
console.log(isValid); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `phoneNumber` | `string` | 要验证的电话号码字符串。 |

#### Returns

`boolean`

如果是有效的电话号码则返回true，否则返回false。

#### Defined in

[validation/isPhoneNumber.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/validation/isPhoneNumber.ts#L11)

___

### isURL

▸ **isURL**(`url`): `boolean`

验证给定的字符串是否为有效的URL。

**`example`**
const isValid = isURL('https://www.example.com');
console.log(isValid); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | 要验证的字符串。 |

#### Returns

`boolean`

如果是有效的URL则返回true，否则返回false。

#### Defined in

[validation/isURL.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/validation/isURL.ts#L11)

___

### kebabCase

▸ **kebabCase**(`str`): `string`

将字符串转换为 kebab-case（短横线连接的形式）。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 要转换的字符串。 |

#### Returns

`string`

转换后的 kebab-case 字符串。

#### Defined in

[string/kebabCase.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/string/kebabCase.ts#L7)

___

### lruCache

▸ **lruCache**<`K`, `V`\>(`capacity`): `Object`

实现一个最近最少使用（LRU）缓存。

**`example`**
const cache = lruCache<string, number>(3);
cache.put('a', 1);
cache.put('b', 2);
cache.put('c', 3);
console.log(cache.get('a')); // 1
cache.put('d', 4); // 'b' 被移除，因为它是最久未使用的
console.log(cache.get('b')); // undefined

#### Type parameters

| Name | Description |
| :------ | :------ |
| `K` | 键的类型。 |
| `V` | 值的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `capacity` | `number` | 缓存的容量，超过该容量时，将移除最久未使用的项。 |

#### Returns

`Object`

{{
  get: (key: K) => V | undefined,
  put: (key: K, value: V) => void,
  size: () => number
}} - 包含获取、存储和获取缓存大小的方法。

| Name | Type |
| :------ | :------ |
| `get` | (`key`: `K`) => `V` \| `undefined` |
| `put` | (`key`: `K`, `value`: `V`) => `void` |
| `size` | () => `number` |

#### Defined in

[cache/lruCache.ts:22](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/cache/lruCache.ts#L22)

___

### memoize

▸ **memoize**(`func`): (...`args`: `any`[]) => `any`

缓存函数结果的高阶函数 (memoization)

**`example`**
const expensiveFunc = (num) => {
  console.log('Calculating...');
  return num * 2;
};
const memoizedFunc = memoize(expensiveFunc);
console.log(memoizedFunc(5)); // Calculating... 10
console.log(memoizedFunc(5)); // 10 (cached)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | `Function` | 需要缓存的函数 |

#### Returns

`fn`

返回缓存处理后的函数

▸ (...`args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[cache/memoize.ts:16](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/cache/memoize.ts#L16)

___

### merge

▸ **merge**<`T`\>(`target`, ...`sources`): `T`

深度合并多个对象。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | 目标对象。 |
| `...sources` | `Partial`<`T`\>[] | 要合并的源对象。 |

#### Returns

`T`

合并后的目标对象。

#### Defined in

[object/merge.ts:8](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/object/merge.ts#L8)

___

### mergeAndDeduplicate

▸ **mergeAndDeduplicate**<`T`\>(`arr1`, `arr2`): `T`[]

合并两个数组并去重

**`example`**
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const result = mergeAndDeduplicate(array1, array2);
console.log(result); // [1, 2, 3, 4, 5]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr1` | `T`[] | 第一个数组 |
| `arr2` | `T`[] | 第二个数组 |

#### Returns

`T`[]

合并且去重后的数组

#### Defined in

[data/mergeAndDeduplicate.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/mergeAndDeduplicate.ts#L17)

___

### observableStream

▸ **observableStream**<`T`\>(): `Object`

可观察数据流，用于处理和订阅实时数据流。

**`example`**
const stream = observableStream<number>();
const unsubscribe = stream.subscribe(data => console.log('Received:', data));
stream.next(42); // 输出: Received: 42
unsubscribe();
stream.next(100); // 不再输出
stream.complete();

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 数据流中的数据类型。 |

#### Returns

`Object`

{{
  subscribe: (callback: (data: T) => void) => () => void,
  next: (data: T) => void,
  complete: () => void
}} - 包含订阅、发送数据和完成流的方法。

| Name | Type |
| :------ | :------ |
| `complete` | () => `void` |
| `next` | (`data`: `T`) => `void` |
| `subscribe` | (`callback`: (`data`: `T`) => `void`) => () => `void` |

#### Defined in

[data/observableStream.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/observableStream.ts#L19)

___

### once

▸ **once**<`T`\>(`fn`): (...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\> \| `undefined`

确保某个函数只被调用一次。

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `T` | 要执行的函数。 |

#### Returns

`fn`

一个只执行一次的函数。

▸ (...`args`): `ReturnType`<`T`\> \| `undefined`

确保某个函数只被调用一次。

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`T`\> |

##### Returns

`ReturnType`<`T`\> \| `undefined`

一个只执行一次的函数。

#### Defined in

[performance/once.ts:6](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/performance/once.ts#L6)

___

### paginate

▸ **paginate**<`T`\>(`data`, `pageSize`, `pageNumber`): `T`[]

分页处理函数

**`example`**
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page1 = paginate(data, 3, 1); // [1, 2, 3]
const page2 = paginate(data, 3, 2); // [4, 5, 6]
const page3 = paginate(data, 3, 3); // [7, 8, 9]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `T`[] | 输入数据 |
| `pageSize` | `number` | 每页的大小 |
| `pageNumber` | `number` | 页码（从1开始） |

#### Returns

`T`[]

当前页的数据

#### Defined in

[data/paginate.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/paginate.ts#L18)

___

### parallelLimit

▸ **parallelLimit**<`T`\>(`tasks`, `limit`): `Promise`<`T`[]\>

并行执行异步任务，并限制同时执行的任务数。

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tasks` | () => `Promise`<`T`\>[] | 一个包含异步函数的数组。 |
| `limit` | `number` | 同时执行的最大任务数。 |

#### Returns

`Promise`<`T`[]\>

返回一个Promise数组，包含所有任务的结果。

#### Defined in

[async/parallelLimit.ts:7](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/async/parallelLimit.ts#L7)

___

### pipe

▸ **pipe**<`T`\>(...`fns`): (`initialValue`: `T`) => `T`

管道函数，用于将多个函数组合起来按顺序执行。

**`example`**
const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
const square = (x: number) => x * x;
const result = pipe(addOne, double, square)(2);
console.log(result); // 36

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 初始数据的类型。 |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...fns` | (`arg`: `T`) => `T`[] |

#### Returns

`fn`

返回执行后的最终结果。

▸ (`initialValue`): `T`

管道函数，用于将多个函数组合起来按顺序执行。

##### Parameters

| Name | Type |
| :------ | :------ |
| `initialValue` | `T` |

##### Returns

`T`

返回执行后的最终结果。

#### Defined in

[data/pipe.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/pipe.ts#L15)

___

### policyEvaluator

▸ **policyEvaluator**(`userAttributes`, `policies`): `Object`

权限策略评估器，用于根据复杂的策略规则评估用户的权限。

**`example`**
const user = { role: 'admin', department: 'IT' };
const policies = {
  canEdit: (user) => user.role === 'admin',
  canView: (user) => user.department === 'IT'
};
const evaluator = policyEvaluator(user, policies);
console.log(evaluator.evaluate('canEdit')); // true
evaluator.addPolicy('canDelete', (user) => user.role === 'admin' && user.department === 'IT');
console.log(evaluator.evaluate('canDelete')); // true

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userAttributes` | `Record`<`string`, `any`\> | 用户的属性对象，如角色、部门等。 |
| `policies` | `Record`<`string`, (`user`: `Record`<`string`, `any`\>) => `boolean`\> | 权限策略的映射表，键为策略名称，值为评估函数。 |

#### Returns

`Object`

{{
  evaluate: (policyName: string) => boolean,
  addPolicy: (policyName: string, evaluator: (user: Record<string, any>) => boolean) => void
}} - 包含评估权限和添加策略的方法。

| Name | Type |
| :------ | :------ |
| `addPolicy` | (`policyName`: `string`, `evaluator`: (`user`: `Record`<`string`, `any`\>) => `boolean`) => `void` |
| `evaluate` | (`policyName`: `string`) => `boolean` |

#### Defined in

[security/policyEvaluator.ts:22](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/policyEvaluator.ts#L22)

___

### priorityQueue

▸ **priorityQueue**<`T`\>(`initialElements?`): `Object`

优先队列，用于按照优先级顺序处理任务。

**`example`**
const pq = priorityQueue<string>();
pq.enqueue('task1', 2);
pq.enqueue('task2', 1);
console.log(pq.dequeue()); // 'task2'

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 队列元素的类型。 |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialElements?` | { `item`: `T` ; `priority`: `number`  }[] |

#### Returns

`Object`

{{
  enqueue: (item: T, priority: number) => void,
  dequeue: () => T | undefined,
  peek: () => T | undefined,
  size: () => number
}} - 包含入队、出队、查看队首元素和获取队列大小的方法。

| Name | Type |
| :------ | :------ |
| `dequeue` | () => `T` \| `undefined` |
| `enqueue` | (`item`: `T`, `priority`: `number`) => `void` |
| `peek` | () => `T` \| `undefined` |
| `size` | () => `number` |

#### Defined in

[dataStructures/priorityQueue.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/dataStructures/priorityQueue.ts#L19)

___

### priorityTaskQueue

▸ **priorityTaskQueue**<`T`\>(): `Object`

任务优先级队列，用于按照优先级执行任务。

**`example`**
const taskQueue = priorityTaskQueue<string>();
taskQueue.enqueue('task1', 2);
taskQueue.enqueue('task2', 1);
taskQueue.enqueue('task3', 3);
taskQueue.processAll(task => console.log(task)); // 输出: 'task2', 'task1', 'task3'

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 任务的类型。 |

#### Returns

`Object`

{{
  enqueue: (task: T, priority: number) => void,
  dequeue: () => T | undefined,
  size: () => number,
  processAll: (processor: (task: T) => void) => void
}} - 包含入队、出队、获取队列大小和处理所有任务的方法。

| Name | Type |
| :------ | :------ |
| `dequeue` | () => `T` \| `undefined` |
| `enqueue` | (`task`: `T`, `priority`: `number`) => `void` |
| `processAll` | (`processor`: (`task`: `T`) => `void`) => `void` |
| `size` | () => `number` |

#### Defined in

[scheduler/priorityTaskQueue.ts:19](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/scheduler/priorityTaskQueue.ts#L19)

___

### readCSVFile

▸ **readCSVFile**(`file`): `Promise`<`object`[]\>

读取并解析CSV文件，将其转换为对象数组。

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 要读取的CSV文件。 |

#### Returns

`Promise`<`object`[]\>

返回一个Promise，包含解析后的对象数组。

#### Defined in

[files/readCSVFile.ts:6](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/readCSVFile.ts#L6)

___

### readFile

▸ **readFile**(`file`): `Promise`<`string`\>

读取文本文件内容

**`example`**
const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
readFile(file).then(content => console.log(content)); // "Hello, world!"

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 要读取的文件对象 |

#### Returns

`Promise`<`string`\>

文件内容

#### Defined in

[files/fileReader.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/fileReader.ts#L13)

___

### readFileAsText

▸ **readFileAsText**(`file`): `Promise`<`string`\>

读取文件并以文本形式返回。

**`example`**
const fileInput = document.getElementById('fileInput') as HTMLInputElement;
fileInput.addEventListener('change', async () => {
  if (fileInput.files) {
    const content = await readFileAsText(fileInput.files[0]);
    console.log(content);
  }
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 要读取的文件。 |

#### Returns

`Promise`<`string`\>

包含文件内容的Promise。

#### Defined in

[files/readFileAsText.ts:16](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/readFileAsText.ts#L16)

___

### resizeImage

▸ **resizeImage**(`imageFile`, `width`, `height`): `Promise`<`Blob`\>

将图片文件缩放为指定尺寸

**`example`**
const imageFile = new File(["..."], "image.png", { type: "image/png" });
resizeImage(imageFile, 200, 200).then(blob => console.log(blob));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageFile` | `File` | 图片文件 |
| `width` | `number` | 缩放后的宽度 |
| `height` | `number` | 缩放后的高度 |

#### Returns

`Promise`<`Blob`\>

缩放后的图片 Blob 对象

#### Defined in

[images/resizeImage.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/resizeImage.ts#L15)

___

### retry

▸ **retry**<`T`\>(`asyncFn`, `retries`, `delay`): `Promise`<`T`\>

重试异步操作，直到成功或达到最大重试次数。

**`example`**
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};
retry(fetchData, 3, 1000).then(data => console.log(data)).catch(err => console.error(err));

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 异步操作的返回类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asyncFn` | () => `Promise`<`T`\> | 需要重试的异步函数。 |
| `retries` | `number` | 最大重试次数。 |
| `delay` | `number` | 每次重试之间的延迟时间（毫秒）。 |

#### Returns

`Promise`<`T`\>

成功时返回异步操作的结果，如果失败则抛出错误。

#### Defined in

[async/retry.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/async/retry.ts#L18)

___

### retryFetch

▸ **retryFetch**(`url`, `options?`, `retries?`, `delay?`): `Promise`<`Response`\>

带有重试功能的fetch请求。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | 请求的URL。 |
| `options` | `RequestInit` | `{}` | fetch请求的选项。 |
| `retries` | `number` | `3` | 最大重试次数。 |
| `delay` | `number` | `1000` | 每次重试之间的延迟时间（毫秒）。 |

#### Returns

`Promise`<`Response`\>

返回一个Promise，包含fetch请求的响应。

#### Defined in

[network/retryFetch.ts:9](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/network/retryFetch.ts#L9)

___

### reverseString

▸ **reverseString**(`str`): `string`

反转字符串。

**`example`**
const reversed = reverseString('hello');
console.log(reversed); // 'olleh'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | 要反转的字符串。 |

#### Returns

`string`

反转后的字符串。

#### Defined in

[string/reverseString.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/string/reverseString.ts#L11)

___

### roleBasedAccessControl

▸ **roleBasedAccessControl**<`R`, `P`\>(): `Object`

基于角色的访问控制（RBAC），用于管理用户权限。

**`example`**
const rbac = roleBasedAccessControl<string, string>();
rbac.addRole('admin', ['create', 'read', 'update', 'delete']);
console.log(rbac.canAccess('admin', 'update')); // true
console.log(rbac.getRoles()); // ['admin']

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `R` | extends `string` | 角色类型。 |
| `P` | extends `string` | 权限类型。 |

#### Returns

`Object`

{{
  addRole: (role: R, permissions: P[]) => void,
  canAccess: (role: R, permission: P) => boolean,
  getRoles: () => R[]
}} - 包含添加角色、检查访问权限和获取所有角色的方法。

| Name | Type |
| :------ | :------ |
| `addRole` | (`role`: `R`, `permissions`: `P`[]) => `void` |
| `canAccess` | (`role`: `R`, `permission`: `P`) => `boolean` |
| `getRoles` | () => `R`[] |

#### Defined in

[security/roleBasedAccessControl.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/roleBasedAccessControl.ts#L18)

___

### rotateImage

▸ **rotateImage**(`imageBlob`, `degrees`): `Promise`<`Blob`\>

旋转图像

**`example`**
const blob = new Blob(["..."], { type: "image/jpeg" });
rotateImage(blob, 90).then(rotatedBlob => {
  // Do something with rotatedBlob
});

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageBlob` | `Blob` | 原始图片的 Blob 对象 |
| `degrees` | `number` | 旋转角度（正值为顺时针，负值为逆时针） |

#### Returns

`Promise`<`Blob`\>

返回旋转后的图片 Blob 对象

#### Defined in

[images/rotateImage.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/rotateImage.ts#L14)

___

### saveFile

▸ **saveFile**(`content`, `filename`, `mimeType?`): `void`

将文本保存为文件

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `content` | `string` | `undefined` | 文件内容 |
| `filename` | `string` | `undefined` | 文件名 |
| `mimeType` | `string` | `'text/plain'` | 文件类型 |

#### Returns

`void`

#### Defined in

[files/fileReader.ts:29](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/fileReader.ts#L29)

___

### scrollToElement

▸ **scrollToElement**(`element`, `offset?`): `void`

平滑滚动到页面上的指定元素。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `element` | `HTMLElement` | `undefined` | 要滚动到的目标元素。 |
| `offset` | `number` | `0` | 滚动时的偏移量（默认为0）。 |

#### Returns

`void`

#### Defined in

[dom/scrollToElement.ts:6](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/dom/scrollToElement.ts#L6)

___

### sequencer

▸ **sequencer**(`animations`): `Promise`<`void`\>

动画序列器，用于按顺序执行一组动画。

**`example`**
const fadeIn = () => new Promise(resolve => setTimeout(() => { console.log('Fade In'); resolve(); }, 1000));
const move = () => new Promise(resolve => setTimeout(() => { console.log('Move'); resolve(); }, 1000));
const fadeOut = () => new Promise(resolve => setTimeout(() => { console.log('Fade Out'); resolve(); }, 1000));
sequencer([fadeIn, move, fadeOut]).then(() => console.log('All animations done'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animations` | () => `Promise`<`void`\>[] | 包含一系列返回Promise的动画函数。 |

#### Returns

`Promise`<`void`\>

返回一个Promise，表示所有动画执行完毕。

#### Defined in

[animations/sequencer.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/animations/sequencer.ts#L13)

___

### shuffle

▸ **shuffle**<`T`\>(`array`): `T`[]

随机打乱数组的顺序。

**`example`**
const shuffledArray = shuffle([1, 2, 3, 4, 5]);
console.log(shuffledArray); // [3, 5, 1, 4, 2]（示例，顺序随机）

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | 要打乱顺序的数组。 |

#### Returns

`T`[]

打乱顺序后的新数组。

#### Defined in

[array/shuffle.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/array/shuffle.ts#L11)

___

### sortByKey

▸ **sortByKey**<`T`\>(`array`, `key`, `ascending?`): `T`[]

根据对象数组的指定键进行排序。

**`example`**
const data = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }];
const sorted = sortByKey(data, 'age');
console.log(sorted); // [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }]

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 数组中对象的类型。 |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `array` | `T`[] | `undefined` | 需要排序的对象数组。 |
| `key` | keyof `T` | `undefined` | 对象中用于排序的键。 |
| `ascending` | `boolean` | `true` | - |

#### Returns

`T`[]

排序后的数组。

#### Defined in

[data/sortByKey.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/sortByKey.ts#L15)

___

### staggeredSequencer

▸ **staggeredSequencer**(`animations`, `delay`): `Promise`<`void`\>

分段执行动画序列，为每个动画增加延迟。

**`example`**
const fadeIn = () => new Promise(resolve => setTimeout(() => { console.log('Fade In'); resolve(); }, 1000));
const move = () => new Promise(resolve => setTimeout(() => { console.log('Move'); resolve(); }, 1000));
const fadeOut = () => new Promise(resolve => setTimeout(() => { console.log('Fade Out'); resolve(); }, 1000));
staggeredSequencer([fadeIn, move, fadeOut], 500).then(() => console.log('All animations done'));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animations` | () => `Promise`<`void`\>[] | 包含一系列返回Promise的动画函数。 |
| `delay` | `number` | 每个动画之间的延迟时间（毫秒）。 |

#### Returns

`Promise`<`void`\>

返回一个Promise，表示所有动画执行完毕。

#### Defined in

[animations/staggeredSequencer.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/animations/staggeredSequencer.ts#L14)

___

### strategy

▸ **strategy**<`T`, `R`\>(): `Object`

策略模式实现，用于根据不同策略执行不同逻辑。

**`example`**
const strategies = strategy<number, string>();
strategies.addStrategy('double', n => `Double: ${n * 2}`);
strategies.addStrategy('square', n => `Square: ${n * n}`);
console.log(strategies.execute('double', 4)); // 输出: Double: 8
console.log(strategies.execute('square', 4)); // 输出: Square: 16

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 策略输入的类型。 |
| `R` | 策略输出的类型。 |

#### Returns

`Object`

{{
  addStrategy: (name: string, strategy: (input: T) => R) => void,
  execute: (name: string, input: T) => R
}} - 包含添加策略和执行策略的方法。

| Name | Type |
| :------ | :------ |
| `addStrategy` | (`name`: `string`, `strategy`: (`input`: `T`) => `R`) => `void` |
| `execute` | (`name`: `string`, `input`: `T`) => `R` |

#### Defined in

[patterns/strategy.ts:18](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/patterns/strategy.ts#L18)

___

### taskScheduler

▸ **taskScheduler**(): `Object`

任务调度器，用于按时间间隔或计划表执行任务。

**`example`**
const scheduler = taskScheduler();
const task = () => console.log('Task executed');
scheduler.schedule(task, 1000); // 每秒执行一次
scheduler.scheduleAt(task, new Date(Date.now() + 5000)); // 5秒后执行一次
scheduler.cancel(task); // 取消任务

#### Returns

`Object`

{{
  schedule: (task: () => void, interval: number) => void,
  scheduleAt: (task: () => void, date: Date) => void,
  cancel: (task: () => void) => void
}} - 包含调度任务、在特定时间执行任务和取消任务的方法。

| Name | Type |
| :------ | :------ |
| `cancel` | (`task`: () => `void`) => `void` |
| `schedule` | (`task`: () => `void`, `interval`: `number`) => `void` |
| `scheduleAt` | (`task`: () => `void`, `date`: `Date`) => `void` |

#### Defined in

[scheduler/taskScheduler.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/scheduler/taskScheduler.ts#L17)

___

### throttle

▸ **throttle**(`func`, `limit`): (...`args`: `any`[]) => `void`

节流函数，限制函数在一定时间内只能执行一次。

**`example`**
const throttledFunc = throttle(() => { console.log('Called'); }, 1000);
window.addEventListener('resize', throttledFunc);

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | (...`args`: `any`[]) => `void` | 需要节流的函数。 |
| `limit` | `number` | 时间限制（毫秒）。 |

#### Returns

`fn`

节流后的函数。

▸ (...`args`): `void`

节流函数，限制函数在一定时间内只能执行一次。

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`void`

节流后的函数。

#### Defined in

[performance/throttle.ts:12](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/performance/throttle.ts#L12)

___

### toggleClass

▸ **toggleClass**(`element`, `className`): `void`

切换元素上的一个或多个类名。

**`example`**
toggleClass(document.getElementById('myElement')!, 'active');

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | 要操作的元素。 |
| `className` | `string` | 要切换的类名，可以是多个类名用空格分隔。 |

#### Returns

`void`

#### Defined in

[dom/toggleClass.ts:10](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/dom/toggleClass.ts#L10)

___

### transformTree

▸ **transformTree**<`T`, `K`\>(`items`, `idKey`, `parentKey`): `T`[]

将平铺的数据结构转换为树结构。

**`example`**
const items = [
  { id: 1, parentId: null, name: 'Root' },
  { id: 2, parentId: 1, name: 'Child 1' },
  { id: 3, parentId: 1, name: 'Child 2' }
];
const tree = transformTree(items, 'id', 'parentId');
console.log(tree); // [{ id: 1, parentId: null, name: 'Root', children: [{ id: 2, parentId: 1, name: 'Child 1' }, { id: 3, parentId: 1, name: 'Child 2' }] }]

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | `T` | 原始数据的类型。 |
| `K` | extends `string` \| `number` \| `symbol` | 数据键的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `items` | `T`[] | 原始平铺数据的数组。 |
| `idKey` | `K` | 标识每个项唯一性的键。 |
| `parentKey` | `K` | 标识父级项的键。 |

#### Returns

`T`[]

转换后的树结构数据。

#### Defined in

[data/transformTree.ts:20](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/data/transformTree.ts#L20)

___

### truncate

▸ **truncate**(`str`, `maxLength`, `suffix?`): `string`

截断字符串并添加省略号（如果需要）。

**`example`**
const truncated = truncate('This is a long string', 10);
console.log(truncated); // 'This is...'

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `undefined` | 要截断的字符串。 |
| `maxLength` | `number` | `undefined` | 字符串的最大长度。 |
| `suffix` | `string` | `'...'` | - |

#### Returns

`string`

截断后的字符串。

#### Defined in

[string/truncate.ts:13](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/string/truncate.ts#L13)

___

### unique

▸ **unique**<`T`\>(`array`): `T`[]

获取数组中的唯一值，去除重复项。

**`example`**
const uniqueArray = unique([1, 2, 2, 3, 4, 4]);
console.log(uniqueArray); // [1, 2, 3, 4]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `array` | `T`[] | 要处理的数组。 |

#### Returns

`T`[]

包含唯一值的新数组。

#### Defined in

[array/unique.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/array/unique.ts#L11)

___

### uploadImage

▸ **uploadImage**(`file`, `uploadUrl`): `Promise`<`Response`\>

将图片文件上传到指定的服务器端点

**`example`**
const file = document.querySelector('input[type="file"]').files[0];
uploadImage(file, 'https://example.com/upload')
  .then(response => console.log('Upload successful', response))
  .catch(error => console.error('Upload failed', error));

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `File` | 图片文件对象 |
| `uploadUrl` | `string` | 服务器上传端点的 URL |

#### Returns

`Promise`<`Response`\>

返回包含上传响应的 Promise

#### Defined in

[images/uploadImage.ts:14](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/images/uploadImage.ts#L14)

___

### uuid

▸ **uuid**(): `string`

生成 UUID v4

**`example`**
const id = uuid();
console.log(id); // 'e.g. 123e4567-e89b-12d3-a456-426614174000'

#### Returns

`string`

返回生成的 UUID

#### Defined in

[helpers/uuid.ts:10](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/helpers/uuid.ts#L10)

___

### validateForm

▸ **validateForm**<`T`\>(`formData`, `validators`): `Object`

验证表单数据是否符合指定的验证规则。

**`example`**
const validators = {
  username: (value: string) => value.length < 3 ? 'Username too short' : null,
  password: (value: string) => value.length < 6 ? 'Password too short' : null,
};
const result = validateForm({ username: 'foo', password: 'bar' }, validators);
console.log(result); // { isValid: false, errors: { password: 'Password too short' } }

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | 表单数据的类型。 |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `formData` | `T` | 表单数据对象。 |
| `validators` | `Record`<keyof `T`, (`value`: `any`) => ``null`` \| `string`\> | 每个字段的验证规则，返回错误信息或null。 |

#### Returns

`Object`

- 返回验证结果和错误信息。

| Name | Type |
| :------ | :------ |
| `errors` | `Partial`<`Record`<keyof `T`, `string`\>\> |
| `isValid` | `boolean` |

#### Defined in

[forms/validateForm.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/forms/validateForm.ts#L17)

___

### validateForm2

▸ **validateForm2**(`data`, `rules`): `ValidationResult`

验证表单数据是否符合指定的验证规则。

**`example`**
const data = { username: 'user1', email: 'invalidemail' };
const rules = {
  username: { required: true, message: 'Username is required' },
  email: { pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email format' },
};
const result = validateForm(data, rules);
console.log(result);
// { valid: false, errors: ['Invalid email format'] }

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `FormData` | 包含表单字段及其对应值的对象。 |
| `rules` | `Record`<`string`, `ValidationRule`\> | 包含每个表单字段的验证规则的对象。 |

#### Returns

`ValidationResult`

返回验证结果，包括是否通过验证及错误信息。

#### Defined in

[validation/validateForm.ts:36](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/validation/validateForm.ts#L36)

___

### validatePassword

▸ **validatePassword**(`password`, `minLength?`, `requireUppercase?`, `requireLowercase?`, `requireNumber?`, `requireSpecialChar?`): `boolean`

验证密码的复杂性，检查是否符合指定的安全标准。

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `password` | `string` | `undefined` | 需要验证的密码。 |
| `minLength` | `number` | `8` | 密码的最小长度，默认为8。 |
| `requireUppercase` | `boolean` | `true` | 是否要求包含大写字母，默认为true。 |
| `requireLowercase` | `boolean` | `true` | 是否要求包含小写字母，默认为true。 |
| `requireNumber` | `boolean` | `true` | 是否要求包含数字，默认为true。 |
| `requireSpecialChar` | `boolean` | `true` | 是否要求包含特殊字符，默认为true。 |

#### Returns

`boolean`

如果密码符合标准则返回true，否则返回false。

#### Defined in

[security/validatePassword.ts:11](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/security/validatePassword.ts#L11)

___

### virtualFileSystem

▸ **virtualFileSystem**(): `Object`

虚拟文件系统，用于在内存中模拟文件操作。

**`example`**
const vfs = virtualFileSystem();
vfs.createFile('/path/to/file.txt', 'Hello, World!');
console.log(vfs.readFile('/path/to/file.txt')); // 'Hello, World!'
vfs.deleteFile('/path/to/file.txt');

#### Returns

`Object`

{{
  createFile: (path: string, content: string) => void,
  readFile: (path: string) => string | undefined,
  deleteFile: (path: string) => void,
  listFiles: () => string[]
}} - 包含创建、读取、删除和列出文件的方法。

| Name | Type |
| :------ | :------ |
| `createFile` | (`path`: `string`, `content`: `string`) => `void` |
| `deleteFile` | (`path`: `string`) => `void` |
| `listFiles` | () => `string`[] |
| `readFile` | (`path`: `string`) => `string` \| `undefined` |

#### Defined in

[files/virtualFileSystem.ts:17](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/files/virtualFileSystem.ts#L17)

___

### workerManager

▸ **workerManager**(`workerScript`): `Object`

Web Worker 管理器，用于在 Web Worker 中执行异步任务。

**`example`**
const worker = workerManager('worker.js');
worker.runTask({ action: 'calculate', payload: 42 }).then(result => console.log(result));
worker.terminate();

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workerScript` | `string` | Web Worker 的脚本路径。 |

#### Returns

`Object`

{{
  runTask: (data: any) => Promise<any>,
  terminate: () => void
}} - 包含运行任务和终止 Worker 的方法。

| Name | Type |
| :------ | :------ |
| `runTask` | (`data`: `any`) => `Promise`<`any`\> |
| `terminate` | () => `void` |

#### Defined in

[workers/workerManager.ts:15](https://github.com/isdfs/low-code/blob/9dffdb0/packages/utils/src/workers/workerManager.ts#L15)
