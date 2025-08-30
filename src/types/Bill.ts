// Bill Type
export type Bill = {
    billType: string;
    dayCreated: string;
    dayDue: string;
    releaseNotification: boolean;
    relNotiLog: boolean;
    weekBeforeNotification: boolean;
    weeNotiLog: boolean;
    dayBeforeNotification: boolean;
    dayNotiLog: boolean;
}