const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
     pattern: "unmute",	
     alias: ["unlock"],
     react: "🔊",
     desc: "mute group.",
     category: "group",
     filename: __filename,
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants,  isItzcp, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
        if (!isGroup) return reply('This command can only be used in a group❗.')
        if (!isBotAdmins) return reply('කරුනාකර ශැඩො md බොට් වෙත ඇඩ්මින් ලබා දෙන්න ❗.')
        if (!isAdmins) return reply('ඔබ owner නොවෙ ❌.') 
  
            await conn.groupSettingUpdate(m.chat, "not_announcement")
           const mass = await conn.sendMessage(m.chat, { text: '*Group chat unmuted* 🔊' }, { quoted: mek });
            return await conn.sendMessage(m.chat, { react: { text: '🔊', key: mass.key } });
} catch(e) {
console.log(e);
reply('කරුනාකර shadow md bot ඇඩ්මින් ලබා දෙන්න ❗❗')     
} 
})
