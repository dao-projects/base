const reg = {
  // 用户名正则，4到16位（字母，数字，下划线）
  username: /^[a-zA-Z0-9_]{4,16}$/,
  //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
  password: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
  // 数字
  number: /^[0-9]*$/,
  //整数
  pattern: /^-?[1-9]\d+$/,
  //正整数
  posPattern: /^[1-9]\d*$/,
  // 负整数
  negPattern: /^-[1-9]\d*$/,
  // 正浮点数
  posFloatPattern: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,
  // 负浮点数
  negFloatPattern: /^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$/,
  // 邮箱
  email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
  // 手机号
  phone: /^1[345789]\d{9}$/,
  // 电话
  tel: /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/,
  // 昵称（不超过12个字符的）
  nickname: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,12}$/,
  // 姓名
  name: /^[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*$/,
  //身份证号（18位）
  idCard:
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  // 银行卡
  bankcard: /^(\d{16}|\d{19})$/,
  // url验证
  url: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  // ipv4
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  // 十六进制颜色
  color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  //简单日期正则
  date: /^\d{4}-\d{1,2}-\d{1,2}$/,
  //简单时间正则
  time: /^\d{2}:\d{2}:\d{2}$/,
  //简单日期时间正则
  datetime: /^\d{4}-\d{1,2}-\d{1,2}\s\d{2}:\d{2}:\d{2}$/,
  // 正确的年月日正则表达式
  dateISO:
    /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
  // 正确的时分秒正则表达式
  timeISO: /^(?:[01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
  //微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
  wechat: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
  // 车牌号正则
  carNo:
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
  // 中文
  chinese: /^[\u4E00-\u9FA5]+$/,
  // 正则验证
  regex: function (value, regex) {
    // return regex.test(value);
    return (this?.[regex] || regex).test(value);
  },
};


export default reg;