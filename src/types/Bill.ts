// Bill Type
export type Bill = {
    billType: string;
    DueDates: number;
    TimeCreated: number;
    releaseNotification: boolean;
    relNotiLog: boolean;
    weekBeforeNotification: boolean;
    weeNotiLog: boolean;
    dayBeforeNotification: boolean;
    dayNotiLog: boolean;
}