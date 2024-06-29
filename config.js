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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348165820748";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348165820748";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348165820748,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_23_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NSxcbiAgICAgICAgNixcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAzNCxcbiAgICAgICAgODIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI2LFxuICAgICAgICA3NyxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDYxLFxuICAgICAgICA0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDgwLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDY1LFxuICAgICAgICA4NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDM2LFxuICAgICAgICA3MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJpOEMxbzcwVEhLQUFtemVXTzN4U1JLUW1HWUtKQTA3L1RnUXVrMXJxTms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImJMU2dnMlo0Uk9pWHByT0NhU2VqOEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTQxNWY0NTktODg4ZC00MTJiLWIwZDAtNGU2NTI1NGU0NmI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDE5OCxcbiAgICAgIDE1MixcbiAgICAgIDE5MCxcbiAgICAgIDg4LFxuICAgICAgMixcbiAgICAgIDIxOCxcbiAgICAgIDIxMSxcbiAgICAgIDExNSxcbiAgICAgIDE1MixcbiAgICAgIDE2MCxcbiAgICAgIDE4MSxcbiAgICAgIDc1LFxuICAgICAgMTkyLFxuICAgICAgNzksXG4gICAgICAyMTksXG4gICAgICAxMzQsXG4gICAgICAxMDUsXG4gICAgICAxMDEsXG4gICAgICAyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTYsXG4gICAgICAxNTIsXG4gICAgICA2MyxcbiAgICAgIDkyLFxuICAgICAgMTY5LFxuICAgICAgMjUzLFxuICAgICAgMTU0LFxuICAgICAgMTU5LFxuICAgICAgMTMsXG4gICAgICAxMzgsXG4gICAgICAyMDYsXG4gICAgICAyMDAsXG4gICAgICAyNCxcbiAgICAgIDIzNSxcbiAgICAgIDIzNCxcbiAgICAgIDEyNixcbiAgICAgIDQ4LFxuICAgICAgMTgwLFxuICAgICAgMjAwLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJIUUtSVEtDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY1ODIwNzQ4OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDIzNzkxODU4MjgwNTA6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTitnOGM4SEVJK0dnYlFHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJETkpwVCtiQXRnVTNya3BrbWgrMmRCWjJ6YXlCQ1JIdUtrY0NDd1JvZGtVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklZRVVRNXFrNEZYRllrZzdORFRoSkgyazBuSFMzVTRKaDhvUEZraGs0RHFmZ1NPN3UwcTE4dzlYdmxubWtXa1JsNy91bG5NZlZuUmFmdVRlRTlBbkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9TSnB0WjNzYlQvQ2pSWmlWdDFkRlhneEs4TzAxSkdsRkRBT2lVSW91Y3U3REJFRnQ1UFpqY044QTJrUVpxOUdsUURUSFZrTHZDbHhVNW9Qa3pNUkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjU4MjA3NDg6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTY4MTgxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
