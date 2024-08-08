/**
 * 数据同步器，用于在不同的数据源之间保持数据同步。
 *
 * @template T - 数据类型。
 * @param {() => Promise<T>} fetchData - 从远程数据源获取数据的函数。
 * @param {(data: T) => Promise<void>} updateLocal - 更新本地数据的函数。
 * @param {(data: T) => boolean} compare - 比较本地数据和远程数据的函数，返回是否需要同步。
 * @returns {Promise<void>} 返回一个Promise，表示同步完成。
 *
 * @example
 * const fetchData = async () => fetch('/api/data').then(res => res.json());
 * const updateLocal = async (data) => localStorage.setItem('data', JSON.stringify(data));
 * const compare = (data) => JSON.stringify(data) !== localStorage.getItem('data');
 * dataSynchronizer(fetchData, updateLocal, compare).then(() => console.log('Data synchronized'));
 */
export declare function dataSynchronizer<T>(fetchData: () => Promise<T>, updateLocal: (data: T) => Promise<void>, compare: (data: T) => boolean): Promise<void>;
