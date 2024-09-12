const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    
 ＩＡＭ ＳＨＡＤＯＷ ＭＤ - ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ 💭
 
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 L𝗟𝗔𝗞𝗦𝗛𝗔𝗡 𝐓𝐄𝐂𝐇 [ 𝗟𝗔𝗞𝗦𝗛𝗔𝗡 𝗗𝗔𝗠𝗔𝗬𝗔𝗡𝗧𝗛𝗔]
           
*ᴠᴇʀꜱɪᴏɴ : 2.0.1📌*    
             
*ꜰʟᴀᴛꜰᴏʀᴍ : 𝐀𝐋𝐋 𝐅𝐋𝐀𝐓𝐅𝐎𝐑𝐌 📌*
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029Vajn0gb8F2pFh7PDqO0c

> ❯❯ ꜱʜᴀᴅᴏᴡ-ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ➣`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




