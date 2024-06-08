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
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "94774574323";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94774574323";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_03_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMixcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDM5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDcyLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA1OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDIwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDI0LFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjFpYXVhTTg5cytZL0sxTHlxYWVjTGtQTzlwTkdRSHdzMXpISHJFRU5ubWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NzQ1NzQzMjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYzNzM3QzFFNUNBQjA3RjgyMjkzMjJBNjI2OTY5RUFGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzgzMzgyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVYTVuQV9GblMyMlFqbVdoc0w3Yy1nXCIsXG4gIFwicGhvbmVJZFwiOiBcImU2MGQ1NTc1LTc1MTgtNGU5NC04NmJmLTRjMjI2MjIzNThjOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAyMjYsXG4gICAgICAxMTksXG4gICAgICA2MSxcbiAgICAgIDEyNCxcbiAgICAgIDY4LFxuICAgICAgNTEsXG4gICAgICAyMTYsXG4gICAgICAxNzMsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICAxODEsXG4gICAgICAyNSxcbiAgICAgIDExNCxcbiAgICAgIDUsXG4gICAgICAxMTAsXG4gICAgICAxMTEsXG4gICAgICAxOTgsXG4gICAgICAxODMsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDI0MixcbiAgICAgIDEyLFxuICAgICAgOTIsXG4gICAgICA3NixcbiAgICAgIDgwLFxuICAgICAgMTQsXG4gICAgICAyMTMsXG4gICAgICAyNDcsXG4gICAgICAxMSxcbiAgICAgIDIyNixcbiAgICAgIDExMyxcbiAgICAgIDIyMSxcbiAgICAgIDc1LFxuICAgICAgMTYwLFxuICAgICAgMjMsXG4gICAgICA4NSxcbiAgICAgIDI0NixcbiAgICAgIDczLFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTJOMk9rREVOU2drTE1HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJVQStVSDFlSUEySkMxU3kvWitYSCs0N1VFbyszd3pqM0RmQ2dOQldCbTJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZmWXUwYUpRUjZSZGI0WjJwdlhxdGdVUnI0dUg2T2dDS3FyTjNWcklVREhQMDd6M2kxZU5SN2NmOXpzZU1zZnJFbE1vN25GRDluZkp4QWcwdDZrOUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlNOemIrR0phcFU0WFhTT0dYb1Q4Z3A2SkRTc3BCbFM5MjdCUDMrY0oza3N6bWRKS0w0Vk5BYytZNTQ4K0VyamdMQWZBZEhwZVoxTUk4UGt4UStUdEFnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzQ1NzQzMjM6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJALnx8yarhtI3htIfqnLHKnCDhtIvhtIDhtKHqnLHKnOG0gMqfyo/htIB8fF9fJlwiLFxuICAgIFwibGlkXCI6IFwiMTM3NDAwODE4OTA1MTE5OjQ2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzQ1NzQzMjM6NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3ODMzODE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSEUxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIRTAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwUS9PbjBiQjlEcUU2VVNpdDlVWEVScEUrZGlOMldCL1hpdXVHTU9tNUU0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwMjY5NTA3OTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhFMS5qc29uIjogIntcImtleURhdGFcIjpcImtOc1VtMmFwKy92UE9wMWw0bFFRa244dEtEZjI5TjhHbGdvSjZOREhqckk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNjk1MDc5NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzc5MzE4NDkxM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhFMi5qc29uIjogIntcImtleURhdGFcIjpcImdXMnRpcjYrV2JxbjhSeitPTzhicnV3ZHF1QW0vMWdqRTlLV0pJVU45Vm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAyNjk1MDc5NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE3Nzk1MDQxODc2XCJ9Igp9"  // PUT your SESSION_ID 


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
