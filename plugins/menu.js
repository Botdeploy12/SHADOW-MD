//===========menu========
cmd({
    pattern: "menu",
    react: "📁",
    alias: ["panel"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let textt = `
*👋 Hello ${pushname}*

> 👨‍💻 𝗦𝗛𝗔𝗗𝗢𝗪-𝗠𝗗 𝗕𝗢𝗧 𝗠𝗘𝗡𝗨 👨‍💻

👨🏻‍💻⚟ *ɴᴀᴍᴇ ʙᴏᴛ* : ꜱʜᴀᴅᴏᴡ-ᴍᴅ💫
👨🏻‍💻⚟ *ᴄʀᴇᴀᴛᴏʀ* :  ɴᴇᴡ ᴠᴇʀꜱɪᴏɴ💫
👨🏻‍💻⚟*ʙᴏᴛ ᴜꜱᴇʀ* :${pushname}💫
👨🏻‍💻⚟ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}💫
👨🏻‍💻⚟*ᴠᴇʀsɪᴏɴs* : 2.0.1 (ᴀᴅᴅᴇᴅ ʜɪᴅᴅᴇɴ ғᴇᴀᴜᴛᴜʀᴇs)💫
👨🏻‍💻⚟ *ᴛʏᴘᴇ sᴄʀɪᴘᴛ* : ᴘʟᴜɢɪɴs💫
👨🏻‍💻⚟ *ᴄᴏɴᴛᴀᴄᴛ* : https://wa.me/9474767910958 💫

*┌ ✦📥 ＤＯＷＮＬＯＡＤＥＲ📥 ✦*
*│➣ .ғʙ <ᴜʀʟ>*
*│➣ .ɪɢ <ᴜʀʟ>*
*│➣ .ɢᴅʀɪᴠᴇ <ᴜʀʟ>*
*│➣ .ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*
*│➣ .ᴛɪᴋᴛᴏᴋ <ᴜʀʟ>*
*│➣ .ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*
*│➣ .ꜱᴏɴɢ <ϙᴜᴇʀʏ>*
*│➣ .ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*

*┌ ✦ 🔎 S E A R C H 🔍✦*.    
*│➣ .ʏᴛꜱ1 <ᴛᴇxᴛ>*
*│➣ .ᴡɪᴋɪ <ᴛᴇxᴛ>*
*│➣ .ᴅᴏɢ*
*└ ➣ .ᴀɴɪᴍᴇɢɪʀʟ*

*┌ ✦ 🧠 ＡＩ 🧠✦*
*│➣  .ᴀɪ <ᴛᴇxᴛ>*
*│➣ .ɢᴘᴛ <ᴛᴇxᴛ>*
*│➣ .ʟᴀᴍᴅᴀ <ᴛᴇxᴛ>*
*│➣ .ʀᴇᴍɪɴɪ <ᴛᴇxᴛ>*
*└ ➣ .ʟᴀʟᴀʟᴀɴᴅ <ᴛᴇxᴛ>*


*┌ ✦👨🏻‍💻ＯＷＮＥＲ 👨‍💻✦*
*│➣ .ʙᴀɴᴄʜᴀᴛ*
*│➣ .ʙᴀɴ @ᴜsᴇʀ*
*│➣ .ʀᴇꜱᴛᴀʀᴛ*
*│➣ .ᴜɴʙᴀɴ*
*│➣ .ᴜɴʙᴀɴ @ᴜsᴇʀ*
*│➣ .ʙʟᴏᴄᴋ*
*│➣ .ᴜɴʙʟᴏᴄᴋ*
*│➣ .ᴊɪᴅ*
*│➣ .ɢᴊɪᴅꜱ*
*│➣ .ꜱʜᴜᴛᴅᴏᴡɴ*
*│➣ .ᴄʟᴇᴀʀᴄʜᴀᴛꜱ*
*│➣ .ʙʀᴏᴀᴅᴄᴀꜱᴛ*
*│➣ .sᴇᴛᴘᴘ <ʀᴇᴘʟʏ ᴡɪᴛʜ ᴘʜᴏᴛᴏ>*
*└ ➣ .sᴇᴛʙɪᴏ*

*┌ ✦ 👥 ＧＲＯＵＰ 👥✦*
*│➣ .ᴅᴇʟ <ʀᴇᴘʟʏ ᴛᴏ ᴛʜᴇ ᴍsɢ ᴜ ᴡᴀɴᴛ ᴛᴏ ᴅᴇʟᴇᴛᴇ>*
*│➣ .ᴀᴅᴅ*
*│➣ .sᴇᴛᴅᴇsᴄ <ᴛᴇxᴛ>*
*│➣ .ᴘʀᴏᴍᴏᴛᴇ*
*│➣ .ᴅᴇᴍᴏᴛᴇ*
*│➣ .ʜɪᴅᴇᴛᴀɢ*
*│➣ .ᴛᴀɢᴀʟʟ*
*│➣ .ᴛᴀɢᴀᴅᴍɪɴ*
*│➣ .ɪɴᴠɪᴛᴇ*
*│➣ .ᴋɪᴄᴋ*
*│➣ .ʟᴇᴀᴠᴇ*
*└ ➣ .ʟɪɴᴋ*

*┌ ✦ 📃 ＩＮＦＯ 📃✦*
*│➣ .ᴍᴇɴᴜ*
*│➣ .ᴀʟʟᴍᴇɴᴜ*
*│➣ .ꜱᴄʀɪᴘᴛ*
*│➣ .ᴘɪɴɢ*
*│➣ .ꜱʏꜱᴛᴇᴍ*
*│➣ .ʀᴜɴᴛɪᴍᴇ*
*└ ➣ .ᴀʟɪᴠᴇ*

*┌ ✦🤹🏻‍♂️ ＣＯＮＶＥＲＴＥＲ 🤹🏻‍♂️✦*
*│➣ .ᴛᴏᴍᴘ3*
*│➣ .ᴛᴏᴜʀʟ*
*│◦➣ .ᴄᴏɴᴠᴇʀᴛ*
*└ ➣ .sᴛɪᴄᴋᴇʀ*

*┌ ✦ 🗃️ O Ｔ H E Ｒ 🗃️✦*
*│➣ .ᴊᴏᴋᴇ*
*│➣ .ꜱᴜᴘᴘᴏʀᴛ*
*│➣ .ꜰᴀᴄᴛ*
*│➣ .Qᴜᴏᴛᴇ*
*│➣ .ʜᴀᴄᴋ*
*│➣ .ᴅᴇꜰɪɴᴇ*
*│➣ .ᴀʙᴏᴜᴛ*
*│➣ .ᴏᴡɴᴇʀ*
*│➣ .ɴᴇᴡꜱ*
*│➣ .ᴡᴇᴀᴛʜᴇʀ*
*│➣ .ɢᴘᴀꜱꜱ*
*│➣ .ꜰᴀᴄᴛ*
*└ ➣ .ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*

> *𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗦𝗛𝗔𝗗𝗢𝗪-𝗠𝗗 𝗠𝗨𝗟𝗧𝗜 𝗗𝗘𝗩𝗜𝗖𝗘 𝗪𝗔𝗧𝗦 𝗔𝗣𝗣 𝗕𝗢𝗧 👨🏻‍💻*
`
return await conn.sendMessage(from,{image: {url: `https://telegra.ph/file/5f0335bebb60421970e8b.jpg`},caption: tex},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
