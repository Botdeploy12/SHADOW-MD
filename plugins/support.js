const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "support",
    desc: "To get the bot informations.",
    react: "😸",
    category: "main",
    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*

*⚒️ SHADOW-MD Support Channels⚒️*

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029Vajn0gb8F2pFh7PDqO0c

> ❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)

}

})
