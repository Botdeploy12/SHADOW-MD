const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
            pattern: "hidetag",
            alias: ["htag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
      async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try { if (!m.isGroup) return reply(tlang().group);
       if (!m.isGroup) return reply(`only for groups`);
            conn.sendMessage(m.chat, {
                text: q ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: mek ,messageId:genMsgId() 
            });
     } catch (e) {
reply('*Error !!*')
l(e)
}
})
