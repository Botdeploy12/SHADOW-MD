const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fN0QnaSZ#eJUc31aQhTsaVW8_xBQRwC47HNW2vov0oXCpYiHM3HI",
SUDO_NB: process.env.SUDO_NB || "94784337506",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true",
};
