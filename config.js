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
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBEYnVWYjFMMXlsdTVCZ3oyTFRSUGJ1TzVLS2VLRkgyZVRNdWJSVmRsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzJFRkdoUlZNTVJrOE1KbmRwN1dDcmg0SlVFV2ROZUhTTmNacE01SmJUcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxRUpiZ0hKR2dtVWNHTnA0ZTUyTXExMnFyWHZQNzF6QmdRYlBVaEIwaW5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyOW81UlZKbFVHeFF0bEN2eFUwWURFVkhuNlRBeUlrU2UyTisyL1ZuNGxzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitEd3p2YjBMVldYZkhEcnlUbFV6V2ozQ0pSYWIza0lZbjZZNUMrZ2hQWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxnME5WTHZ3Yksyd1BBRk10QWNVeHBkQmoxcXlSWkdEN1N5bER4QU9RQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUI1SWJudHhiRFJjaTg5T04xdFZaNFhNQ1daQStYbDg4NVBZZ24zdEhrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY25xWC9ROW1XdCtqaklGTWtFMllrbzlQODRXb2xVTGt6NlpmSnowekd4TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ3TVRUN0NFYlhIeWtmVlp5NllHNjAyT2tQeEpSeHRlRWNQdXllakxqSkYvMzdYU0Jad1prcjdrU2N6STBVVjNKc3Rwek05bWltc1cyTGhrTjYxOERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMwLCJhZHZTZWNyZXRLZXkiOiJvditra0xhSE1wMGQ1WDBNOW1MTGtQMFh5M0x2NThDQ3ZaUnBOZ0I3Z3J3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJWGp3XzBpN1JtaUtoZFUzODhnem53IiwicGhvbmVJZCI6ImJkYzEwY2JmLTcyMGItNDUxMy1hNmEwLTFkZjAwYjExMTEwOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHdzlEdnhSamRPNHN6NER5dHFKbGxFSjJ4NjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEp3aTRzWHprWDkvTVloczZqcTVua3BXOUVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllRWFE1TEU1IiwibWUiOnsiaWQiOiIyNTQ3MzkxODU3NTQ6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ3aWxseSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGVQeXRNRkVLRDh0cmNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic1JlOHNQVEpPeE9aR0Zld1NndkdIYXRtcklGNkFERk9UQlZheEdZaG1HMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidUNVRlBwUWEyYnVHcU9wVWpqalczV1BIaExSd1RMNVpLMDNxOTV2SG4yczBEWXdZS05iM2hTaGRuWGdHZ3JhdmJjTDNzdXFTbWhxaHhHSm13RlArQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImkvN1RQYUdmMGJLazRIN2JCSERvNy9jdTNsM051OWZZaU5oYm81N1hNd3NtYXVHWFo2YzdSWU9EVFdWME5SVG51dFBzSlBxSEpremJtUm9LWlJaY0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzM5MTg1NzU0OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYkVYdkxEMHlUc1RtUmhYc0VvTHhoMnJacXlCZWdBeFRrd1ZXc1JtSVpodCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjg1Njc0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKNVMifQ==",  //PUT Session Id Here, 
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
