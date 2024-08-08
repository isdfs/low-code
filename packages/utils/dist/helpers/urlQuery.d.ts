/**
 * 提供用于管理 URL 查询参数的实用方法。
 */
export declare class UrlQuery {
    /**
     * 修改当前 URL 的查询参数。
     * @param {Record<string, string | number | null | undefined>} params - 要修改的查询参数键值对。
     * @example
     * // 当前 URL 为 http://localhost/contentManage?md5key=f37ce29c2b2ce8ed&md5PageSize=20
     * urlQuery.updateParams({ type: 'detail', id: 5106 });
     * // 修改后的 URL 为 http://localhost/contentManage?md5key=f37ce29c2b2ce8ed&type=detail&id=5106
     */
    static updateParams(params: Record<string, string | number | null | undefined>): void;
    /**
     * 删除当前 URL 的查询参数。
     * @param {string[]} params - 要删除的查询参数列表。
     * @example
     * // 当前 URL 为 http://localhost/contentManage?md5key=f37ce29c2b2ce8ed&type=detail&id=5106
     * UrlQueryParamUtil.removeParams(['md5key', 'type']);
     * // 修改后的 URL 为 http://localhost/contentManage?id=5106
     */
    static removeParams(params: string[]): void;
}
