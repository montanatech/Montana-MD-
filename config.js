const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "263789432940"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://kenton2004:kenton2004@cluster0.8ywpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'xkenton0@gmail.com'
global.github = 'https://github.com/montanatech/montana-md-'
global.location = 'mutare zim'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '263789432940' 
global.devs = '263789432940';
global.website = 'https://github.com/montanatech/montana-md-' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0NYU0tvYWVlVVVmVW9RREc4WGpzNWVkeTZLT2tDaThOaE90VVhmUk1HND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3JaNE5DSXJTeHBhZ2tUZVJZcXEydXdHL2lCSEpJVFhUQksyZFVwRXhWdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSzlCUkRma3dnM2NBUlpTaERYYkxacVZMTWJ4eWo2ZTYvNW0ySGxibFhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoRmt5ckdGcVFKNE5PYS9Yem82bW9LWjFzOWMwOXVrRkRDcGJmZmdUQlhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNObitCdTFVVm1ubDJacXZWcHNtckVnWjdVS2VBM21GL1daaDVPdHRMMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ1TC9ldks5QWxianQ1aC9EN1B6dm5BeVExUmtJdm1CRDQ0S0ZrU05nQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBSLzZWVGFjUmhDV1JRMzV3VlZ2ZXJZU3RLS1ZvK2xaaFVZdElGeHdrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibjU0NFo1Wlg3cVVYcG1zNkJEQW13bkRUOHJkdktxVTljUjR5VXJLWjdtZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBWd3JBZFl5RUhCUWRSUGRGODcvMWJFeXNPWk9WeXNTQ0tlMEwxYUxuejlxVnZqMUwxdng5c2MyR211a1A0ZitRTjZxVzdLYnVYTXhpYTZYOVFKZWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IjBIbHJuM3ljaXVpYVdhTUFXRnhJdTZ4aVJOVkZSZm9zc3dpWjZ6cUprazA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzM5MTg1NzU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVDMkZFMEQ1MDY5QUIwOTIyRTZEOUMwMjZBMUU3MTM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4NDI1MjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDczOTE4NTc1NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQjA3REVCNUZBNTgwQzVGQTVFRDA0RDMxOTM5MkJGNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2ODQyNTI0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MzkxODU3NTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjJGRDdCQTcyQjYyN0FBNjE5OTA5NDM2NDI2ODBDNzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjg0MjUyN30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzM5MTg1NzU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMyRDE0RERBRUZDMjEwOUE0OURBRDQ3REM3N0QzNDFBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjY4NDI1Mjd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImphNkdjUnRCUU5DUGs5QXV3T1NlbEEiLCJwaG9uZUlkIjoiOGNmYWM3ZjctZjQ0ZC00Njg5LTg3MjUtOTEzMWQ2NGM0ODcwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJZ1h5SXR6ZG9aMlNuSUNWYW5EY285RWhkcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNEU2NlB5TkhaS0szQ0Nlc2hQRnVLdE01YlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUktHNEJWUTUiLCJtZSI6eyJpZCI6IjI1NDczOTE4NTc1NDoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IndpbGx5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQYVB5dE1GRUl1TnRyY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzUmU4c1BUSk94T1pHRmV3U2d2R0hhdG1ySUY2QURGT1RCVmF4R1lobUcwPSIsImFjY291bnRTaWduYXR1cmUiOiJxZ09UemdBTWVrbm14WmVsZmFmTFViSUZRL3FRM2o5eERnc2p3cGQreEoyY0RSd1U0TENFUnI3YjFSUGZhTmdvdDdNdzZoM2NTWFBDdlc1NWFFd2xEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoialA2V1BYWGpkaWNFTzh4RkNNL01lbFlSRzhNa0JBdmVreUVjbmxZYzBGaGYyamhCeU1zZFphbkFtQkpDMWpnNS9Ic1o3MmxUbmtzQkFJdlIrUDY5akE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3MzkxODU3NTQ6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiRVh2TEQweVRzVG1SaFhzRW9MeGgyclpxeUJlZ0F4VGt3VldzUm1JWmh0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2ODQyNTIyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUo1UiJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "MONTANA" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'MAGICAL-KX' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
