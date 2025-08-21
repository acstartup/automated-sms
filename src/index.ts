// Psuedo Coded Logic
// Stay with hard-coded dates for now
/* Note: Code does not address various names of bills, bills may not all be named the same,
potentially you may +1 increment backend name of the bill and increment via size of object or array,
incrementing through every single bill to check dayIncrementor at Cron trigger.
*/

// Property Manager Type
type propertyManager = {
    company: String;
    phone: String;
}

// Tenant Type
type Tenant = {
    name: String;
    property: String;
    phone: String;
}

// Bill Type
type Bill = {
    billType: String;
    DueDates: number;
    TimeCreated: number;
    releaseNotification: boolean;
    relNotiLog: boolean;
    weekBeforeNotification: boolean;
    weeNotiLog: boolean;
    dayBeforeNotification: boolean;
    dayNotiLog: boolean;
}

// Day Incrementor
/* checks for date and if logged, if not just disregards,
log prevents multi-sending as log === True after sendSMS() after fileLog(). */
/*
dayIncrementor(type: Bill) {
    tempTime = date.now() - Bill.TimeCreated
    if tempTime > 7 && 7DBNLog === False:
        7DayBeforeNotify = True;
    elif tempTime = DueDate - 1 && DBNLog === False:
        DayBeforeNotify = True;
    else
        void;
}
*/

// Daily Cron Checker
// 9am Daily (MEANT FOR SENDING) (hard-coded for MVP)
/*
cron.schedule(0 9 * * *) {
    dayIncrementor();
    checkSMS();
}
*/

// checkSMS() Function
/*
checkSMS(type: Bill) {
    if Bill.ReleaseNotify === true:
        sendSMS()
        ReleaseNotify = false;
    else if Bill.7DayBeforeNotify === true: 
        sendSMS()
    else if Bill.DayBeforeNotify === true:
        sendSMS()
    else
        void;
}
*/

// sendSMS() Function
/*
sendSMS(type:Bill) {
    *Infobip HTTP Sending Documentation but sends with user info, and bill info*
}
*/