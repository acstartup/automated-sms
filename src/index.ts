// Psuedo Coded Logic
// Stay with hard-coded dates for now
/* Note: Code does not address various names of bills, bills may not all be named the same,
potentially you may +1 increment backend name of the bill and increment via size of object or array,
incrementing through every single bill to check dayIncrementor at Cron trigger.
*/


// Bill Type
/* 
type bill: Bill {
    ReleaseNotify = True;
    RNLog = False;
    7DayBeforeNotify = False;
    7DBNLog = False;
    DayBeforeNotify = False;
    DBNLog = False;
    TimeCreated = date.now()
    DueDate = date set (idk how this works)
    Bill Type = ""

    PROPERTY MANAGER (USER) INFO? OR USER INFO parent-class of BILL TYPE (FOR CUSTOM ALERTS)
    TENANT INFO? ALSO NEEDED FOR PERSONALIZED ALERTS
    heirachy? could = PROPERTY MANAGER (USER) INFO -> TENANT INFO -> BILL INFO
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