/**
 * storage 浏览器存储工具类封装
 * @description
 *    local:localStorage
 *    session:sessionStorage
 */
export declare const storage: {
    /**
     * local localStorage存储
     */
    local: {
        set(key: any, value: any): any;
        get(key: any): string;
        getUseJSON(key: any): any;
        remove(key: any): any;
        clear(): any;
    };
    /**
     * session sessionStorage存储
     */
    session: {
        set(key: any, value: any): any;
        get(key: any): string;
        getUseJSON(key: any): any;
        remove(key: any): any;
        clear(): any;
    };
};
export default storage;
