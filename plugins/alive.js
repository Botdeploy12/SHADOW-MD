const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👨‍💻 Hello ${pushname}*

⚡𝗛𝗘𝗟𝗟𝗢𝗪 ┇ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ⚡

*💗 Nice to meat you*

*► 𝚑𝚢ｉａｍ ＡＬＩＶＥ ｏｎｗ👾*

*🔖We welcome the new arrivals of the digital world_►*

*❯ Welcome Shado md whats app bot you can download video songs and various videos through this bot. Shado md owner is Lakshan Damayantha.. It also gives you the ability to solve the new revolution in technology and technology problems and there is great potential here. This technology is also related to AI.*

> *➣ ᴏᴡɴᴇʀ : ꜱʜᴀᴅᴏᴡ-ᴍᴅ*

> *➣ ᴜᴘ ᴛɪᴍᴇ : 2 ʜᴏᴜʀꜱ 1 ᴍɪɴɪᴛꜱ*

> *➣ ʀᴀᴍ ᴜꜱᴇɢᴇ : 167/1024ᴍʙ*

> *➣ ᴠᴇʀꜱɪᴏɴ : 6.0.0*

*┇Always smile and life will be beautiful💗*

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*✨`

await conn.sendMessage(from, {
            audio: { url: 'https://github.com/Shadowmd99/V-6-menu/raw/main/Alivevvv6.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
await conn.sendMessage(from, { text: config.ALIVE_MSG ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardednewslettermessageInfo: {
      newslettername: "SHADOW-MD",
      servermessageId: 999
    },
externaladreply: { 
title: 'SHADOW MD',
body: 'best',
mediatype: 5,
sourceurl: "https://whatsapp.com/channel/0029Vajn0gb8F2pFh7PDqO0c" ,
thumbnailurl: 'https://telegra.ph/file/5f0335bebb60421970e8b.jpg' ,
renderlargerthumbnail: false,
showadattribution: false,
}
}}, { quoted : mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
