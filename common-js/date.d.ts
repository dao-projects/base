export declare const date: {
    formatTime: (d: any, fmt?: string) => any;
    time: (t?: any) => any;
    getNextDate(nDays?: number, fmt?: string): any;
    getTimeBucket(dayArr?: number[], fmt?: string): {
        begin: any;
        end: any;
    }[];
    compareDate: (s1: any, s2: any) => boolean;
    maxExpireDate: () => Date;
};
export default date;
