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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_10_53_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY1LFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEsXG4gICAgICAgIDMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NCxcbiAgICAgICAgNDksXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLa2dLeWpiamdUR1RNTStmTDN3QUR3cW8wejk0Z2R0bFVEMVVNSmo2ZHRRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTUxMjc5N0QxOEYyMkY2Nzk3RTQ0NDg1RDlBNEVBMjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzEyODI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDg4NDU3NDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NkNEREQxRDE5QTRDMENEMUMxRDAzRjM4Q0RCRkE3RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzMTI4MjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODg0NTc0MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDNDczMzUyQjBFMjFGMUFFQjYyRTkyMjlCRkU0NDQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTMxMjgzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjZGMDZFNEUxQkM5Qzg2QTg3RTFBOEFFOUZGQTlEOTZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzEyODMwXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFncThHSzJwUWNhVWw2N2VGamJydUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTYwMTgxMzgtN2ZlMC00NzkxLWEzYWMtMGI4NTc2OWZhYWRiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQwLFxuICAgICAgNDksXG4gICAgICA0OSxcbiAgICAgIDU1LFxuICAgICAgMTc3LFxuICAgICAgODcsXG4gICAgICAyMjcsXG4gICAgICA5LFxuICAgICAgNTUsXG4gICAgICA4MSxcbiAgICAgIDYsXG4gICAgICA4MCxcbiAgICAgIDkyLFxuICAgICAgMTIsXG4gICAgICAxNzYsXG4gICAgICA5MSxcbiAgICAgIDk4LFxuICAgICAgMTIsXG4gICAgICAyMzUsXG4gICAgICAyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDIzNyxcbiAgICAgIDQ1LFxuICAgICAgMjI1LFxuICAgICAgMTI3LFxuICAgICAgMTkzLFxuICAgICAgNzMsXG4gICAgICAyMzEsXG4gICAgICAxNjcsXG4gICAgICAxNTUsXG4gICAgICAxNTMsXG4gICAgICAxMDMsXG4gICAgICAxMjYsXG4gICAgICA4MixcbiAgICAgIDE4NixcbiAgICAgIDY1LFxuICAgICAgMjUxLFxuICAgICAgODIsXG4gICAgICAxMDIsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1dQVFFDNlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQ4ODQ1NzQzNDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTYwOTk3MzAyMTI0Njc4OjExQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfmIXwn5iF8J+YhVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01uOWpZZ0VFTGZENnJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNk5zdzJXSmJhL21jSWhyVFhPRTdXTnd3L09UUExLcmUyS3dya3JyaEZCcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJrd2YxaE1VQytiYkxzcXN3VWdRaTRmWG5TUHdQeXhYWXVFSWtrQkJpOEFFNVRCZDEzc2RkZXhZNjVBZGloQVF0ZmtOYllSUUNqMjZMeWRyeGU1TUlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPeHlUMnpiN3RIQTQwd1VhdGFCMWlXWW5HLzN5Tm8wS24wc2RoMklzd2FFakxhOGVzcG5UaDJkOVkwWlY3NzhzVlp5dG5TYjViSnFBcDd1YmRyczJpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0ODg0NTc0MzQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTMxMjgyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU0zS1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTTNLLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaEp0clFGWGgvTWJ4dXNuaTRVcGl3c3pERXJ5NTlJSU9PMG5RQkthY0dBZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDkwNzQ4MTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzMTI4MjczNjJcIn0iCn0= "  // PUT your SESSION_ID 
";

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
