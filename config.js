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
global.caption = process.env.CAPTION || global.caption || "↲ ₂ͥ₀ͫ₂ͦ₄ Ꭵᵐ͟ᵒ׀Nikiya" 


global.devs = "94774574323" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94761691643";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761691643";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94761691643";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_32_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTczLFxuICAgICAgICA3NixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTE4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU1LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTk5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxODUsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2eEpwQnVGeVo2NGwvcURGNHBCV2pyTEFTWi9XUHhqVUZRM1VHREpWVVB3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzYxNjkxNjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNkUxNDgyNTFBMzhDOUYzQkNFODFEQjc5N0Y3MzhFRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0OTk1MThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2MTY5MTY0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkQxN0Q5QzI3OEVBQUQ3RkY3QUU3MDEwOEI1MjI0MjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDk5NTE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVqMEw1cl9qUjVXaXJaNnRRdmxQa2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjYwMzE3Y2ItNWIxYy00Nzc0LWJhMGItNDQ0OGM4ZWQ4M2E1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgNDcsXG4gICAgICAxMDEsXG4gICAgICAyMzgsXG4gICAgICAxNzYsXG4gICAgICA2OSxcbiAgICAgIDExNSxcbiAgICAgIDE4MyxcbiAgICAgIDE0OSxcbiAgICAgIDIyLFxuICAgICAgMTY5LFxuICAgICAgODksXG4gICAgICA1MCxcbiAgICAgIDEwNCxcbiAgICAgIDIxNixcbiAgICAgIDI0OSxcbiAgICAgIDM2LFxuICAgICAgNzcsXG4gICAgICAxNjcsXG4gICAgICA1N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDgwLFxuICAgICAgMjUyLFxuICAgICAgMTg0LFxuICAgICAgMjM5LFxuICAgICAgMTY1LFxuICAgICAgMTkxLFxuICAgICAgOTQsXG4gICAgICA2NSxcbiAgICAgIDI0MyxcbiAgICAgIDMwLFxuICAgICAgMTgsXG4gICAgICA5MSxcbiAgICAgIDEzOCxcbiAgICAgIDM4LFxuICAgICAgMTM0LFxuICAgICAgOTMsXG4gICAgICAxODksXG4gICAgICA0NixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUS001SFBaQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjE2OTE2NDM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEzNTkzNTIxOTMwMzg0OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjfCdkKLwnZCk8J2QovCdkLLwnZCaXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS25ENzQwQ0VMVDZzclFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3cXQ1bnEycFNka3BQZWdXK1pEdytMSWtLMmx3S1dhbkkxMWZwOWJIOWxZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRwYWd3NStxdE1aOHkyTGlNN2Z1dEMxa0RpeHFtRkwrcUs1clAwU1pGc0daY0pSa2RRbVhWREU0M2dJUUliSDlCcWtjeC8vZ1BmbDVWeUFETURuN0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImIrSWRHdzN5c3ZIc2ZQaUdmTWlKeDRZb0ZPbjhJaUErYkJtNzIrU3A4TWsvek9vWnVQcUZLTEx5ZzFiK2R3Nk1HYXVkdEFJcVFEdE8rV0t6cU1wMER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxNjkxNjQzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDk5NTEzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlhlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKWGUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHcUZ5a1Q4OWtwbHN5djl1dzNpZ05vMVZnaDNMZU16Z3BmWUN2bktCbzdBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU2NTk2MTEyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDk5NTE4MTU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Nikcy and Hiruni",
  ownername:process.env.OWNER_NAME|| "Nikiya",


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
