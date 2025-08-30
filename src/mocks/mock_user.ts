import type { Bill } from "../types/Bill";
import type { propertyManager } from "../types/propertyManager";
import type { Tenant } from "../types/Tenant";

// Property Manager
const mockPropertyManager: propertyManager = {
    company: "UnitNode Realty Inc.",
    phone: "856-803-0653",
}

// Tenant
const mockTenant: Tenant = {
    name: "Aiden Chen",
    property: "25 Park Dr, Mullica Hill, NJ 08062",
    phone: "856-803-0653"
}

// Bills
const mockWaterBill: Bill = {
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