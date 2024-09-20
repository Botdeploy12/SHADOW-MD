const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "5m8RyaoB#9sRtbU3Omv603fCz0-_YrKISC3HHzfJmGez9HMDpqbU",
SUDO_NB: process.env.SUDO_NB || "94767910958",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"true",
};
