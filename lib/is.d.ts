export declare const is: {
    type: (val: any, str: any) => boolean;
    array: (arr: any) => boolean;
    object: (obj: any) => boolean;
    number: (num: any) => boolean;
    string: (str: any) => boolean;
    boolean: (val: any) => boolean;
    date: (d: any) => boolean;
    empty: (val: any) => boolean;
    checkData: (val: any) => boolean;
    hasKey: (obj: any, key: any) => any;
    positive: (val: any) => boolean;
    negative: (val: any) => boolean;
    even: (val: any) => boolean;
};
export default is;
