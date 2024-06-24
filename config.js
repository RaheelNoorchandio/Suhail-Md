okoconst fs = require('fs-extra')
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_42_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgODYsXG4gICAgICAgIDk4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyLFxuICAgICAgICA2NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgxLFxuICAgICAgICA1NSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjksXG4gICAgICAgIDEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDc2LFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgODIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDc3LFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiYkQvd3hyTmJIR2Z5bFZmK1dDQVFhVjJUK0E3aWUrUXhoaUYzUFI3bUlvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEQ0QTkwODUyMTQ4REM1NEI1QTZBQjBCODQ2MkJCNUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjA0MTY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDg4NDU3NDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEMEFGMDQwMTk5OEVDRDMwRDFDQjc4NUFEOEU4MkMyRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkyMDQxNjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODg0NTc0MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjhENjhENTQzNDhBMzZDOTY3QzUyMjE2REMwOTlGQTEwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTIwNDE2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTJENTE4ODQwQTZFRjhDNzIyMkZBRTdBQkJBRUMzODJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjA0MTY3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZrZnF1eHZ0UXotdHRjY2UzaXVLSlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmM5ZGVhZjUtYmRmNi00MWE0LWJmOWUtZDljMzNlNzkwMTZmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDIwLFxuICAgICAgMjE4LFxuICAgICAgMzEsXG4gICAgICA1NCxcbiAgICAgIDE0MyxcbiAgICAgIDIzOSxcbiAgICAgIDI0OCxcbiAgICAgIDE1LFxuICAgICAgMTM1LFxuICAgICAgMTY5LFxuICAgICAgMTYyLFxuICAgICAgMTU1LFxuICAgICAgMTQ2LFxuICAgICAgMTM5LFxuICAgICAgMjA3LFxuICAgICAgODEsXG4gICAgICA0MyxcbiAgICAgIDg3LFxuICAgICAgMTA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDI0MyxcbiAgICAgIDM0LFxuICAgICAgNzEsXG4gICAgICA5NCxcbiAgICAgIDIzMSxcbiAgICAgIDEyMixcbiAgICAgIDY4LFxuICAgICAgOTYsXG4gICAgICAxMDIsXG4gICAgICA0MCxcbiAgICAgIDIwOSxcbiAgICAgIDU5LFxuICAgICAgMjE0LFxuICAgICAgMTY3LFxuICAgICAgMTczLFxuICAgICAgNjEsXG4gICAgICAxNDEsXG4gICAgICAyMjUsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMelk5ZEVHRU1IeTQ3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVjL1BFaThHdi9Gd283QzhkLy9oR3F6dytlQXZYR1VndXRPUElDWUR2UTg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDJRaFRWOCtaS1EzYnNOL0lIRExJbVRzdkxGeUQ2cVhLdC9DOFlpb0txMzQwb2RueWk2WDZLTGF4SGh1bVhNNDRDcU5kQmo5Qlh5c2FGdmh0MWtJQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia3dycEZvck8rdjFXTnhBQmZnKzFtOWU5YXhHdFRoNHpkR0JzVXJDMk9EbmJNemU1Z3F5L3M0bUp3Ykp0QlJhQ1FkZmRRVi9ScjEwLzQvNWMrK3pXQ3c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0ODg0NTc0MzQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwOTk3MzAyMTI0Njc4OjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+YhfCfmIXwn5iFXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0ODg0NTc0MzQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjA0MTY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUDRVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQNFUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXMHdwTTJhalhCek4vSlFVemQzWElCNnZ5UndTMkc3YnpaZk12bEpqMU80PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3ODI0MTAzMDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTIwNDE2NDc5M1wifSIKfQ=="  // PUT your SESSION_ID 


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
