/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94767438882
SUPPORT GROUP - https://t.me/QueenNilu
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;1r5hBRKb#2iWVTII14j631qBsLJ6ZVjeOXfEfHuKOZDj9ddsJtnE' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://dulen_lx85_user:LObb5NVYsqOpHAr8hUZWAEsVq0RphWGv@dpg-ck3b9ob6fquc739t60i0-a/dulen_lx85'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94710769988'

global.OWNER_NAME = 'Ｍｒ- Ｄｕｌｅｎ. . .| 🕊️ '

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.BOT_OFFLINE = true    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@Duleya 🤹‍♂️' //sticker

global.FOOTER = 'Queen Nilu 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '*ᴅᴜʟᴇɴꜱ | ǫᴜᴇᴇɴ ɴɪʟᴜ 🤍*' // Caption

global.ALIVELOGO = 'https://i.ibb.co/CmvBYmV/replicate-prediction-wxz6zzrcglo4glodjrttsd226y.png' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/IRdyJY5P4sF5BhtP5PIdHH' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'true' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location

