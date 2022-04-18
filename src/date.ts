/**
 * _date 时间封装
 * @type {Object}
 */
import is from "./is";
export const date = {
    formatTime: (d, fmt = "yyyy-MM-dd") => {
        if (is.empty(d)) return "";
        d = is.date(d) ? d : new Date(d);
        if (fmt === "time") {
            return d.getTime();
        }
        const o = {
            "M+": d.getMonth() + 1, //月份
            "d+": d.getDate(), //日
            "h+": d.getHours(), //小时
            "m+": d.getMinutes(), //分
            "s+": d.getSeconds(), //秒
            "q+": Math.floor((d.getMonth() + 3) / 3), //季度
            S: d.getMilliseconds(), //毫秒
            "W+": d.getDay(), //星期
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                (d.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        for (const k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1
                        ? o[k]
                        : ("00" + o[k]).substr(("" + o[k]).length)
                );
            }
        }
        return fmt;
    },
    time: (t: any = new Date()) => (is.date(t) ? t : new Date(t)).getTime(),
    getNextDate(nDays = 1, fmt = "") {
        const time = new Date(
            date.time() + 24 * 60 * 60 * 1000 * Number(nDays)
        );
        return fmt ? date.formatTime(time, fmt) : time;
    },
    getTimeBucket(dayArr = [7, 1 * 30, 3 * 30], fmt = "") {
        const h24 = 24 * 60 * 60 * 1000;
        const t = date.time();
        return dayArr.map((v, i) => ({
            begin: fmt
                ? date.formatTime(t - Number(v) * h24, fmt)
                : t - Number(v) * h24,
            end: fmt ? date.formatTime(t, fmt) : t,
        }));
    },
    compareDate: (s1, s2) =>
        new Date(s1.replace(/-/g, "/")) > new Date(s2.replace(/-/g, "/")),
    maxExpireDate: () => new Date("Fri, 31 Dec 9999 23:59:59 UTC"),
};
export default date;
