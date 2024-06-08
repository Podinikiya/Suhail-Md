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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ NIKIYA" 


global.devs = "94774574323" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94774574323";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "94774574323";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "94743492396,94774574323";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94743492396,94774574323";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_40_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjksXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDM3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODQsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDY1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3LFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4LFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxODUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR084bXZFbzJGaHZGWjRRZm11SGJsODVsUWlwTjZHOVdMdlJCWlRhOVNEdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVTAxVmJQV0tTVGF6S2UyNWZQdXFZZ1wiLFxuICBcInBob25lSWRcIjogXCIxZWIxNzQzOS04MjlhLTRjMTgtODAzMC0wZTE1NmNhMDQ0ZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTI5LFxuICAgICAgODMsXG4gICAgICA5NCxcbiAgICAgIDIwOCxcbiAgICAgIDE1MCxcbiAgICAgIDgxLFxuICAgICAgODIsXG4gICAgICAxMDIsXG4gICAgICAyMzEsXG4gICAgICAyNTIsXG4gICAgICAxMDcsXG4gICAgICAyNDMsXG4gICAgICAyMjMsXG4gICAgICAxNTMsXG4gICAgICAyMTIsXG4gICAgICAyMzgsXG4gICAgICAyNDMsXG4gICAgICAxNjYsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MixcbiAgICAgIDE5LFxuICAgICAgMTc5LFxuICAgICAgMTAsXG4gICAgICAxOTUsXG4gICAgICAxMDEsXG4gICAgICA5MixcbiAgICAgIDE4MyxcbiAgICAgIDEyOCxcbiAgICAgIDE2NixcbiAgICAgIDI1LFxuICAgICAgMTEwLFxuICAgICAgMjAxLFxuICAgICAgNzAsXG4gICAgICAxNTcsXG4gICAgICAxMjQsXG4gICAgICAyMCxcbiAgICAgIDIyNSxcbiAgICAgIDkwLFxuICAgICAgMTE4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS204M2JZQ0VPNnVrck1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjaDBiQlcxc20wa1YyOUxwRncyL2lhMlpEZkY1WUxVZnhqZElWNjVQRWhJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZobG5ldHk3Z2Z2Tnlja0JIM3hmaStFTEpJU09XcVpzSDljem1UUjZGOGtxQkx0Y0xtQnZXd2QwaHUzWUJXV3c0L1VNblhQOVRzRjhJUGdhUWh1eUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNsVkJNeWc2NFdPYXd3bFlxa0NvakQvaDBIakQySWNuN0Fyd1diVm03Y0IyVWl0M3JOYW1GNHQrT0tiNCs3RXRObVp6T05sSkM1SkdGb1pJNERBNmlnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NDM0OTIzOTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMxNjg1NTQyOTk1MjA6MUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzQzNDkyMzk2OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODY4NDAyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSzJFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLMkUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSeCtrQjJoZFpUMzc1NUhyYzNtaXBoTTZpNVBESTBlWElHaGdMRE1EY01NPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY1MTY0ODU1MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3ODY4NDA3NDg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "imesh bot",
  ownername:process.env.OWNER_NAME|| "imesh",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "NIKIYA"  ).toUpperCase(),



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
