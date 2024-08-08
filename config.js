const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348107010684";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348107010684";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349019879923,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349019879923,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349019879923,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_38_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI5LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAzLFxuICAgICAgICAyNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMzksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA5NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInZoNitxRUNZeGU4MHI1U3NpNmtnenpUdDB0RUk4YWxMZ24wOCtrdWEzM0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZOX3d6YkNaUzZpcElnX1h2Z2FWN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTdhNWRiMzYtOTZhMy00Yzg4LWE3MTAtYWFlYmYzNTc1MDdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDIwOCxcbiAgICAgIDIyNixcbiAgICAgIDM4LFxuICAgICAgMTE5LFxuICAgICAgMTQyLFxuICAgICAgMTY0LFxuICAgICAgMTYwLFxuICAgICAgMTQ2LFxuICAgICAgMjI1LFxuICAgICAgNjcsXG4gICAgICA0MSxcbiAgICAgIDE2MixcbiAgICAgIDE3NixcbiAgICAgIDkyLFxuICAgICAgOTIsXG4gICAgICAyMjIsXG4gICAgICAxNjksXG4gICAgICAxNDUsXG4gICAgICAxODFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgNCxcbiAgICAgIDIxMCxcbiAgICAgIDc3LFxuICAgICAgOTksXG4gICAgICAxNTEsXG4gICAgICAxMDQsXG4gICAgICAxNzYsXG4gICAgICAxODksXG4gICAgICAyNTQsXG4gICAgICAyNDcsXG4gICAgICA4OCxcbiAgICAgIDExNyxcbiAgICAgIDI1MCxcbiAgICAgIDEwNCxcbiAgICAgIDYyLFxuICAgICAgNDQsXG4gICAgICAxMDQsXG4gICAgICAzMixcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFZCR0MzMTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDcwMTA2ODQ6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb2pvXCIsXG4gICAgXCJsaWRcIjogXCIxMjE1MjE4MjE1MDM2NTA6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3VxdnVjQ0VPVEZ6clVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIwcWhJV1YzcXV1Yk5rNlF2SGg3Slk1OFIrTU95VDlIYkpBV0JuRnhlTlV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRxVXdFdzBnYTdxZHVraTNBR1FHY05WZUw4R0o4Tm9RNSs5QldiVVlubnBwendtaWpCMHNuRDh0a2RDc3pSWXVqTWErMkNnU3lKTC8vSjQvUFVuc2l3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImkzZzlFNEFjZFl3SUJPSzNnZkhRSjdmanpCZWdibFVBSUJXN213a0JSMmtwWkNqM01SdDJSVHdVWk1tcUlIU3JTdFRSVVQ1R0hUZ2V6L1NoUlJ1OGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDcwMTA2ODQ6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMzA0ODY4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5Ec1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTkRzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUkswdWEwUTlBTU1mdjZ4VEFLUGFjNVpYVCtRQ0xYb3UwUXpvaEo3WEVhMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NTM4OTg4NTksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTczOTE1MDM2M1wifSIKfQ=="  // PUT your SESSION_ID 


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
