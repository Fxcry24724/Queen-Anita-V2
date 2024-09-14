//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349043887892";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVBuYkt6WGdSMFA1R2xWT1llY1ZpWVZoa3FXTEZzK2xGTlFGUG5kTjIwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnFBREl2SDZjQjliMDI4U0QxQjRTcFhKcXNHSnVHL0pyVjZZMi9BQnVUWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRzZEbU5YT3gycG05dHhaRlhBKzFUQ2FHTU5WQnQ1S1VGa0JrUFdCblhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS1BaWENCQ0V4VVlIdVFjUjhKNkNZbS9iRmJGRTRDZmxwc2hOazcxTmc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPZ1IzZHltRFFtL2hnVStCME5CRnVyK3dFRnBaeWZ3cGt5clViU2ZhWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpTM3pWM1IvSmlrM1h5elBXR1dMTUJOMzV3Y0lUeVpaa0ZWekpvT2puRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5UT3d4VVlnbmJrbjVoTmpuQ1AzdVpDMmptNm1tZGs2M2xOb2VXSFRsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFBHU0t5TEZPVEdVSVNrbHM4Q3p1MGt2OWRpWitmVFFMRVloTnV0SkVIOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZBajQyQW84QnkyOEVmeGduQkJ0MTlERENXODZMNFd1Ry8xM0pXSTJhZ2tEYzRnMnloOWNwNklnREVKVUVkZFdXT0lUVTJyd0pDQXhlQzBRUmExYWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MSwiYWR2U2VjcmV0S2V5IjoiMkE3SGlKZHpCSWFSS04zbExvUTMxRVhnMy90UkJDZVFTS09HeVJRS013Zz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiWGlQbFMtNXZSaWViV1VlWTBuNzMxdyIsInBob25lSWQiOiJjMDk4MWI0YS01ZmFhLTRjNjktOWI1Ni0xN2M0YzkzMjEzZjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmRlNWh6VndzYjZkSmQ4SUQvWEllNEhVZTRRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlkazlwSFRBZkY2WnhSV09jSXB3bWlYbGtGZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWNDQ1WE5KVCIsIm1lIjp7ImlkIjoiMjM0OTA0Mzg4Nzg5MjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZYQ1JZwqPCouKCrMKlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaU5nZ01RcTlTV3R3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ5akE1Mm1uVU1WcFZXWmd1STYya1VFL3FIL0NyVlZ0MDdqNGtTdVFYSGxRPSIsImFjY291bnRTaWduYXR1cmUiOiJpSWpHa1QvdVhQOWFkazN0dlRwTnpzYkk2VEVRSVdiVHlNRUxOem5lV3RYMWxobXJvQm90K2dTMVlOWnY4bklHMVpWYk9tT1RBTjNsTllTRDZyUUZBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUTRKSHNkZE5RcUQyaTE1WGlScG5jSk5qRm1reC9uWWViSXB1M2lyUTYrVk5xQ0lRSU43Ymg1NFk1K1BzOS8vUlFiaEMrWWNVa1ZMZ0c1aEVuejhLaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQzODg3ODkyOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY293T2RwcDFERmFWVm1ZTGlPdHBGQlA2aC93cTFWYmRPNCtKRXJrRng1VSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjMyNzM2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLUHYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
