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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347026352630";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026352630";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2347026352630,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347026352630,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_16_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDkwLFxuICAgICAgICA2OCxcbiAgICAgICAgODAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExLFxuICAgICAgICAxODQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicTVrK0lEMXc3MmlSZjJQVEpzejJ4OHJaT0cwaDRabE5QcUZNK3RxYTQwND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUGdwdnZqQnpTdUtPazdWUHUxalBzd1wiLFxuICBcInBob25lSWRcIjogXCJiM2JiYWRlOS1lZDMxLTRlMWQtOWI5OS1lNTdiNThhOTcwNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICAxNTQsXG4gICAgICAxNjksXG4gICAgICA3MixcbiAgICAgIDgsXG4gICAgICAxNCxcbiAgICAgIDE3NSxcbiAgICAgIDE0MyxcbiAgICAgIDIwMCxcbiAgICAgIDExMSxcbiAgICAgIDIxLFxuICAgICAgNTcsXG4gICAgICAxMDEsXG4gICAgICA5OSxcbiAgICAgIDIwNyxcbiAgICAgIDE0MSxcbiAgICAgIDM1LFxuICAgICAgNDAsXG4gICAgICAyMzMsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzEsXG4gICAgICAxMzQsXG4gICAgICAxNTMsXG4gICAgICAyMDgsXG4gICAgICA3OSxcbiAgICAgIDE1MCxcbiAgICAgIDE2MSxcbiAgICAgIDIzNSxcbiAgICAgIDE3OSxcbiAgICAgIDIyNSxcbiAgICAgIDE5NyxcbiAgICAgIDczLFxuICAgICAgMjA0LFxuICAgICAgMTk1LFxuICAgICAgNzIsXG4gICAgICAyMTgsXG4gICAgICAxODUsXG4gICAgICAyOCxcbiAgICAgIDIzOCxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdRNU44VzJFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI2MzUyNjMwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzNTYyNjQ2OTI2OTY4NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01XcTU0WUxFTUNyZ3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVlIyS3FiMWdqZTk2alo4SWhDN1FqcW1wWmR4SFhqellMN0VGdDVqTVZuND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJnY2tkbklhdVU3VWtYODZrMDIxcm5oekRsRVJXTURlWkxHNE10MlJjbXNKdGx6LzlCOUpZM0NybmlMVVRjRVB0TnVXbHY1N1krYTFYZHh1MXZuWDJoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3Qm80Z2d5Qms0b3c0bDRpVGhDSFdQS0loN2g5bUZSWXZOVGFDTEFBbGJqNlQxNjJFSDZnU2J0Kzd6R3lBVTRYbDFMeGQya2hhaTVlUTNyZkNUTVFDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2MzUyNjMwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzAyOTc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0xpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLTGkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3S2FvV3RXZzdoZ0NqR1lkcWViemRBK0RKSUtUVktmazF1VEsxUmVlQllVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI5NjcwNjU5MjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTcwMjk4NTg2NlwifSIKfQ=="  // PUT your SESSION_ID 


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
