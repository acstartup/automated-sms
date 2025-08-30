import type { Bill } from "../types/Bill";
import type { propertyManager } from "../types/propertyManager";
import type { Tenant } from "../types/Tenant";

const waterBill: Bill = {
    billType: "water",
    dayCreated: "8/30/2025",
    dayDue: "9/30/2025",
    releaseNotification: false,
    relNotiLog: false,
    weekBeforeNotification: false,
    weeNotiLog: false,
    dayBeforeNotification: false,
    dayNotiLog: false,
}