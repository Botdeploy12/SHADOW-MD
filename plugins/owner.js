const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*❮❮ 👨‍💻💭 Ｉ ａｍ  🫱🏻‍🫲🏻😻🤍*

🔐❮❮ 𝗦𝗛𝗔𝗗𝗢𝗪 𝗠𝗗 𝗠𝗔𝗜𝗡 𝗢𝗪𝗡𝗘𝗥 🚀

*❮ɪ ᴀᴍ - 𝚂𝙷𝙰𝙳𝙾𝚆 𝙼𝙳 👾🖤*

*❮❮ᴍʏ ʀᴇᴀʟ ɴᴀᴍᴇ - 𝙻𝚊𝚔𝚜𝚑𝚊𝚗 𝙳𝚊𝚖𝚊𝚢𝚊𝚗𝚝𝚑𝚊*🤴🏻🪄

*❮❮ᴀɢᴇ - 999+ 😋🔥*

*❮❮ᴍᴏʀᴇ ᴅɪᴛᴇʟꜱ -* https://wa.me/+94767910958?text=_Hey÷ꜱʜᴀᴅᴏᴡ_ᴍᴅ_ʏᴏᴜ_ᴅɪᴛᴇʟꜱ_👨🏻‍💻👑📍

> *➣ ᴏᴡɴᴇʀ : ꜱʜᴀᴅᴏᴡ-ᴍᴅ*


`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/7eba8a7c5f0d4d59a6419.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Shadowmd99/V-6-menu/raw/main/Shadow%206%20v%20owner%20%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
