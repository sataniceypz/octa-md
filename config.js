const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/eypz/1724661875852_gwwMRtTtz.png",
    ALIVE_MSG: process.env.ALIVE_MSG || "> *OCTA ALIVE*",
    OWNER_NAME: process.env.OWNER_NAME || "Eypz",
    BOT_NAME: process.env.BOT_NAME || "OCTA",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    MODE: process.env.MODE || "public" // Add this line for public/private mode
};
