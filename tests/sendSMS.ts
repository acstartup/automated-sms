// send via ts-node sendSms.ts

import axios from "axios";
import * as dotenv from "dotenv";
import { mockPropertyManager, mockTenant, mockWaterBill } from "../src/mocks/mock_user"; // imports objects from mock_user file

dotenv.config({ path: __dirname + "/../.env" , debug: true }); // moves .env data for compile file (sendSMS.ts) safety, debug: true = dynamic debugging

const apiKey = process.env.INFOBIP_API_KEY!; // process.env. takes info from .env
const baseUrl = process.env.INFOBIP_BASE_URL!;

async function sendSMS() {
    try {
        const response = await axios.post( // axios post is http post
            `${baseUrl}/sms/2/text/advanced`, // for non-string literals in TS & JS, utilize back-tacks "`" instead of single-quote "'" since TS & JS will interpret "'" as strings
            {
                messages: [
                    {
                        from: "+12172108246",
                        destinations: [{ to: mockTenant.phone }], // tenant phone number
                        text: "This is UnitNode.", // will become template in the future
                        smsEncoding: "UNICODE",
                    }
                ]
            },
            {
                headers: {
                    Authorization: `App ${apiKey}`,
                    "Content-Type": "application/json"
                }
            }
        );
        
        console.log("SMS sent successfully:", response.data);
    }
        catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.error("API Error:", error.response?.data || error.message);
        } 
        else {
            console.error("Unexpected Error:", error);
        }
    }
}

sendSMS();