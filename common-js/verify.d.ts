declare const reg: {
    username: RegExp;
    password: RegExp;
    number: RegExp;
    pattern: RegExp;
    posPattern: RegExp;
    negPattern: RegExp;
    posFloatPattern: RegExp;
    negFloatPattern: RegExp;
    email: RegExp;
    phone: RegExp;
    tel: RegExp;
    nickname: RegExp;
    name: RegExp;
    idCard: RegExp;
    card: RegExp;
    bankcard: RegExp;
    url: RegExp;
    ipv4: RegExp;
    color: RegExp;
    date: RegExp;
    time: RegExp;
    datetime: RegExp;
    dateISO: RegExp;
    timeISO: RegExp;
    wechat: RegExp;
    carNo: RegExp;
    chinese: RegExp;
    regex: (value: any, regex: any) => any;
    isCard18: (idCard: any) => boolean;
};
export default reg;
