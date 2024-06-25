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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_19_00_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDI5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcxLFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNixcbiAgICAgICAgODIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxODQsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3LFxuICAgICAgICAzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzksXG4gICAgICAgIDMwLFxuICAgICAgICAxOTksXG4gICAgICAgIDc5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2eG1sUzk3Z1RLRm5LeFZQbVJOeXpYRHlEU3Rjdk1rb1gzazluTXFmNnNVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTM1RDkwNzQ2MTczRUMyNzE2MDQ3M0FCQ0JCNjM3MjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzQyMDUxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDg4NDU3NDM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4NjNGMTJCMDJEQzFFMzRGMUFDNUM1QkVDNTREMUZCNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzNDIwNTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0ODg0NTc0MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlENzY3Q0ZGNDZEMjlCNUU0MjYzRUIzNDczMUM0ODNFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTM0MjA1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4ODQ1NzQzNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0FDMTM4QkU3QkMyNzVFNzE5RDg0RDhDNENDNDFCMkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MzQyMDUzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRBRXNHNUhzVE1XTlE0c0duNDF3cGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWU2YmExYTktYmQ0MS00ZGIxLTg4YjEtYjk0NzZmNGE2MDI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMyxcbiAgICAgIDE2OCxcbiAgICAgIDM0LFxuICAgICAgNDIsXG4gICAgICAxNyxcbiAgICAgIDQ1LFxuICAgICAgMTE3LFxuICAgICAgMTA1LFxuICAgICAgMTkxLFxuICAgICAgNzEsXG4gICAgICAyNTAsXG4gICAgICAxNyxcbiAgICAgIDExLFxuICAgICAgODIsXG4gICAgICAxMzgsXG4gICAgICAxMDUsXG4gICAgICAxODUsXG4gICAgICAxOTMsXG4gICAgICAxMDAsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNixcbiAgICAgIDQyLFxuICAgICAgMTE1LFxuICAgICAgOTUsXG4gICAgICA0LFxuICAgICAgMTk3LFxuICAgICAgMTE3LFxuICAgICAgMjE4LFxuICAgICAgNjAsXG4gICAgICA3MSxcbiAgICAgIDIwNixcbiAgICAgIDE4MCxcbiAgICAgIDYzLFxuICAgICAgMTY5LFxuICAgICAgMjQsXG4gICAgICAxMzEsXG4gICAgICAyMDUsXG4gICAgICAxODksXG4gICAgICAyMDIsXG4gICAgICA3M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCMTlHWlRQOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDg4NDU3NDM0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjA5OTczMDIxMjQ2Nzg6MTNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+YhfCfmIXwn5iFXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXY5allnRUVOK243TE1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2TnN3MldKYmEvbWNJaHJUWE9FN1dOd3cvT1RQTEtyZTJLd3JrcnJoRkJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJWYjNyM1IxRTRDZ2xrS1oxWjFaUkVxK04waEVCTkc2azZpUC9Cd2JDdjZjSXlhbVZaZ2d1Y3JHL0dvZ3hDTFJvY2lJYmcvSmdZc25rTjRIL1dkRkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJDYldIeE43NHRGeE5JRUZYMlBCamdiMkJCM1gxQWVmbjFRMUNJUDE0aVVxMVJZSHIxMDUrNjRHUnVvMWEzclZpUHMrenpSTklMLzFaYUlBaElhMUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQ4ODQ1NzQzNDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzQyMDQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUEduXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQR24uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJRk15eTVnNUo5a21wRWR1N1NRNGR0bEF2UzFiSWVaUlpydkZZTUh1RjQwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwOTA3NDgxMDcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTM0MjA1MDE3NVwifSIKfQ=="  // PUT your SESSION_ID 
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
