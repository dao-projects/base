"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 身份证校验（身份证号合法性验证/支持15位和18位身份证号/支持地址编码、出生日期、校验位验证）
 * @description
 *    根据〖中华人民共和国国家标准 GB 11643-1999〗中有关公民身份号码的规定，公民身份号码是特征组合码，由十七位数字本体码和一位数字校验码组成。
 *    排列顺序从左至右依次为：六位数字地址码，八位数字出生日期码，三位数字顺序码和一位数字校验码。
 *    地址码表示编码对象常住户口所在县(市、旗、区)的行政区划代码。
 *    出生日期码表示编码对象出生的年、月、日，其中年份用四位数字表示，年、月、日之间不用分隔符。
 *    顺序码表示同一地址码所标识的区域范围内，对同年、月、日出生的人员编定的顺序号。
 *    顺序码的奇数分给男性，偶数分给女性。
 *    校验码是根据前面十七位数字码，按照ISO 7064:1983.MOD 11-2校验码计算出来的检验码。
 *    出生日期计算方法:
 *         15位的身份证编码首先把出生年扩展为4位，简单的就是增加一个18或19,这样就包含了所有1800-1999年出生的人。
 *         2000年后出生的都是18位，至于1800年前出生的还没身份证号。
 *    正则表达式及规则:
 *        出生日期1800-2099 => (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])
 *        身份证正则表达式 => /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
 *        15位校验规则=> 6位地址编码+6位出生日期+3位顺序号
 *        18位校验规则=> 6位地址编码+8位出生日期+3位顺序号+1位校验位
 *    校验位规则:
 *        公式:∑(ai×Wi)(mod 11)……………………………………(1)
 *        公式(1)中：
 *        i----表示号码字符从由至左包括校验码在内的位置序号；
 *        ai----表示第i位置上的号码字符值；
 *        Wi----示第i位置上的加权因子，其数值依据公式Wi=2^(n-1）(mod 11)计算得出。
 *        i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
 *        Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1
 */
var city = {
    11: "北京",
    12: "天津",
    13: "河北省",
    14: "山西省",
    15: "内蒙古",
    21: "辽宁省",
    22: "吉林省",
    23: "黑龙江省",
    31: "上海",
    32: "江苏省",
    33: "浙江省",
    34: "安徽省",
    35: "福建省",
    36: "江西省",
    37: "山东省",
    41: "河南省",
    42: "湖北省",
    43: "湖南省",
    44: "广东省",
    45: "广西",
    46: "海南省",
    50: "重庆",
    51: "四川省",
    52: "贵州省",
    53: "云南省",
    54: "西藏",
    61: "陕西省",
    62: "甘肃省",
    63: "青海省",
    64: "宁夏",
    65: "新疆",
    71: "台湾省",
    81: "香港特别行政区",
    82: "澳门特别行政区",
};
/**
 * 年龄计算
 * @param {String} str 年月日 {yyyy-mm-dd}
 */
var getAge = function (str) {
    var age = 0;
    if (str) {
        var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (r == null)
            return false;
        var d = new Date(r[1], r[3] - 1, r[4]);
        if (d.getFullYear() == r[1] &&
            d.getMonth() + 1 == r[3] &&
            d.getDate() == r[4]) {
            var Y = new Date().getFullYear();
            return Y - r[1];
        }
    }
    return age;
};
/**
 * 省级地址码校验
 * @param val 地区码（2位）
 * @returns boolean
 */
var checkProv = function (val) { return !!(/^[1-9][0-9]/.test(val) && city[val]); };
/**
 * 15位身份证转18位
 * @param idCard 15位身份证
 */
var card15to18 = function (idCard) {
    var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
    var arrCh = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
    var cardTemp = 0, i;
    idCard = idCard.substr(0, 6) + "19" + idCard.substr(6, idCard.length - 6);
    for (i = 0; i < 17; i++) {
        cardTemp += idCard.substr(i, 1) * arrInt[i];
    }
    idCard += arrCh[cardTemp % 11];
    return idCard;
};
/**
 * 18位身份证校验算法
 * @param {*} idCard 18位身份证
 * @returns
 */
var isCard18 = function (idCard) {
    var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    var parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
    var code = idCard.substring(17);
    if (p.test(idCard)) {
        var sum = 0;
        for (var i = 0; i < 17; i++)
            sum += Number(idCard[i]) * factor[i];
        if (parity[sum % 11] == code.toUpperCase())
            return true;
        console.log(idCard, parity[sum % 11]);
    }
    return false;
};
/**
 * 日期校验
 * @param {*} val 年月日 {yyyymmdd}
 * @returns
 */
var checkDate = function (val) {
    var pattern = /^(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)$/;
    if (pattern.test(val)) {
        var year = val.substring(0, 4);
        var month = val.substring(4, 6);
        var date = val.substring(6, 8);
        var date2 = new Date(year + "-" + month + "-" + date);
        if (date2 &&
            date2.getFullYear() == parseInt(year) &&
            date2.getMonth() == parseInt(month) - 1 &&
            date2.getDate() == parseInt(date)) {
            return true;
        }
    }
    return false;
};
/**
 * 根据生日的月份和日期，计算星座
 */
var getConstellation = function (month, day) {
    //return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2)
    //return m-(d<"102223444433".charAt(m-1)- -19);  //输出0～12的数字，0表示摩羯，1表示水瓶，依此类推，...，11是射手，12是摩羯
    var s = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
    var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
    return s.substr(month * 2 - (day < arr[month - 1] ? 2 : 0), 2) + "座";
};
/**
 * 根据出生年计算生肖
 */
var getZodiac = function (year) {
    return [
        "鼠",
        "牛",
        "虎",
        "兔",
        "龙",
        "蛇",
        "马",
        "羊",
        "猴",
        "鸡",
        "狗",
        "猪",
    ][(year - 4) % 12];
};
// 身份证验证信息
var cardInfo = function (card, isMore) {
    if (isMore === void 0) { isMore = false; }
    var info = {
        pass: false,
        msg: "身份证号不能为空",
    };
    if (!card)
        return info;
    card = card.toString();
    card = card.replace(/(^\s*)|(\s*$)/g, ""); //去掉字符串头尾空格
    /*15位转18位*/
    if (card.length == 15) {
        card = card15to18(card);
    }
    /*地区校验*/
    if (!checkProv(card.substr(0, 2))) {
        info.msg = "地址编码错误";
        return info;
    }
    /*出生日期校验*/
    if (!checkDate(card.substr(6, 8))) {
        info.msg = "出生日期错误";
        return info;
    }
    /*校验码校验*/
    if (!isCard18(card)) {
        info.msg = "身份证号码校验错误";
        return info;
    }
    // 身份证类型
    var len = card.length === 15 ? 0 : 2; // 15或18
    //年份
    var y = card.substring(6, 8 + len);
    //月份
    var m = card.substring(8 + len, 10 + len);
    //日
    var d = card.substring(10 + len, 12 + len);
    // 验证通过
    info.pass = true;
    // 信息
    info.msg = "身份证号码校验通过";
    // 生日
    info.birthday = "".concat(y, "-").concat(m, "-").concat(d);
    info.age = getAge(info.birthday);
    //性别
    var gender = Number(card.substring(14, 15 + len)) % 2 === 0 ? 1 : 2;
    info.gender = gender;
    info.sex = gender === 1 ? "女" : "男";
    info.province = city[card.slice(0, 2)] || "_";
    if (isMore) {
        info.astro = getConstellation(m, d);
        info.zodiac = getZodiac(y);
    }
    return info;
};
exports.default = cardInfo;
