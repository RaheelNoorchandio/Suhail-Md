const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923146885405";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_00_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDk0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODksXG4gICAgICAgIDU4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc2LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2NixcbiAgICAgICAgMzQsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA4NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi95UlFJMDJDQmJFZ0NVL1BiNTRndEE4bEU2WjFwemlEWU9WVVFDL1NrUUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTQ2ODg1NDA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBRDFCOEIyQUVCRjZEQzc4QjFEMkY2RTgzMzY5RkQ0RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxMTg4NTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOWxDanNRY29TcEsxcVBXN0VBMmdyQVwiLFxuICBcInBob25lSWRcIjogXCIwOGNlYjQwYy05MTQwLTQ0Y2EtOWJjNS1iNTA1YzkwZDQzMTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMjEyLFxuICAgICAgMjI4LFxuICAgICAgNzksXG4gICAgICAyMDMsXG4gICAgICAyMyxcbiAgICAgIDIwNSxcbiAgICAgIDYxLFxuICAgICAgMTIzLFxuICAgICAgNDUsXG4gICAgICAxODMsXG4gICAgICAxNjEsXG4gICAgICAxNDksXG4gICAgICA3MCxcbiAgICAgIDEzMyxcbiAgICAgIDEwMixcbiAgICAgIDQzLFxuICAgICAgOTMsXG4gICAgICAyMjgsXG4gICAgICAxMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg3LFxuICAgICAgNixcbiAgICAgIDEzMSxcbiAgICAgIDgxLFxuICAgICAgMzEsXG4gICAgICA2NSxcbiAgICAgIDg5LFxuICAgICAgMTU0LFxuICAgICAgMjQ4LFxuICAgICAgMTU5LFxuICAgICAgNzksXG4gICAgICA1NyxcbiAgICAgIDcsXG4gICAgICAxNixcbiAgICAgIDE0NCxcbiAgICAgIDE2MixcbiAgICAgIDI1NSxcbiAgICAgIDEwNixcbiAgICAgIDE3OSxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpLWTVOQ1dUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNDY4ODU0MDU6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MjU2ODM3MTE2MDQyOjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJhaGVlbCBOb29yXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9hb05BREVQdlgzck1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYQVVmQi9aMXJhazdXQlNLSFRCVlRIS2NGaXRKNjAxN0orVDEvQm42VXowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVRRWhUSjAwcUExalBCaWw1NmREczhneVlsSkpYMHZqYUtRUEJVWjVrSVJiYXgrMjNKNEpqWCtMWTd6YW1tTmhxQUtEOG42MU9NM2MvVjBlamZyVkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtUV3ZIK1ZZQkdoWHdOK3pKS2RPbWZLWEFpN1FUSW51V0hJMS85YTlzVkJweFk1aS9qSHJjSkJaVHRBVnJQZjNWaGJURE5PRDZwSkVUNkFBMHNnS2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE0Njg4NTQwNToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTExODg0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJiRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQmJFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaGZZV3RkWlVOUzFkeHc0REJ1OWJxWVBQOGxlN1BFeWdBRTFVUG1janBiTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NzM2MTQzNTEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
