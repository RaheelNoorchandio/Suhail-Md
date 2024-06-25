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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923488457434";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_13_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NixcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMjEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMixcbiAgICAgICAgMTk3LFxuICAgICAgICA1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTcsXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICA0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRUNkVkhhY0oyZ1lCUlJtZnVJS0tvekF2N0Y5Wmd0WExJOXE3Q3JnZ2VHQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODg0NTc0MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkQ0NjE2NDkzQ0Y0QzlFMDIzQzFGNkNBNUI4MjEzNDQwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMxNzU5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzVENjBFREVBMjkzRTlDNkVBRDlFQUVERUFFMzg0QTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzE3NTk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDg4NDU3NDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MDQyRjIyMUU4RkE5NkMxMjVBNEQwODJBQTA4MDY2NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzMTc1OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODg0NTc0MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUwMjgwRThCRTVCRjU4NzZEMEIwRkIzNzczMUJCMUI1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMxNzU5OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJabEpoNTNNMlFLbUJzVzJmRVBiWm9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ5MzRiMDk4LTQ5ODgtNDUyOS04MzM2LWQxYjg3OTA2Y2JkMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTksXG4gICAgICAyNDksXG4gICAgICAxMjksXG4gICAgICAxNDcsXG4gICAgICA3NyxcbiAgICAgIDIyOSxcbiAgICAgIDIxNSxcbiAgICAgIDE2OCxcbiAgICAgIDEzOCxcbiAgICAgIDIyMixcbiAgICAgIDAsXG4gICAgICAyMTcsXG4gICAgICAxOTgsXG4gICAgICAxMjksXG4gICAgICAyOCxcbiAgICAgIDI0NyxcbiAgICAgIDM1LFxuICAgICAgMjMwLFxuICAgICAgMjE4LFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MixcbiAgICAgIDI1MCxcbiAgICAgIDE5OSxcbiAgICAgIDEzOSxcbiAgICAgIDEwLFxuICAgICAgNTcsXG4gICAgICAxMCxcbiAgICAgIDE4MixcbiAgICAgIDI0LFxuICAgICAgMjMwLFxuICAgICAgMTEzLFxuICAgICAgNjIsXG4gICAgICAyNDUsXG4gICAgICA0LFxuICAgICAgMTY4LFxuICAgICAgMjQwLFxuICAgICAgOTAsXG4gICAgICAxNDYsXG4gICAgICA5MCxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkVXWVNaODhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODg0NTc0MzQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2MDk5NzMwMjEyNDY3ODoxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5iF8J+YhfCfmIVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcjlqWWdFRU5mbzZyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZOc3cyV0piYS9tY0loclRYT0U3V053dy9PVFBMS3JlMkt3cmtycmhGQnM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidjVRR1FHRDFHNXM1MWdmb3F1RmlwMzlDYlBUMjdVSDdETCt5M3NtUHh4Q2dmd1lmWHhVb0FqMEFVZmYzdW42QlRaaytGMWFnb2hZZzdCNjNTZ2JlQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVk43dHArOVJoUU02b0pYT0xhTjhiNjVGZlY0OWphZzJCRWhXWFB6OE5VcXl1M25wc2U3am9pdHFiWVRNeVpNRWVXMy9oWHdhclRRL2JJTm9yMzNHaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDg4NDU3NDM0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzMTc1OTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNM0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU0zTC5qc29uIjogIntcImtleURhdGFcIjpcInQ2VXhFMy8rTSsyVkI4eDJaelRlM1Jwa0o1Ym1OTUVEU2FtR1BEdDVYaW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA5MDc0ODEwNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTMxNzUxMjI4M1wifSIKfQ=="  // PUT your SESSION_ID 


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
