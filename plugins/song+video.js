const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎧",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please enter a Name or a url❗ *")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `*❮❮❮ SHADOW SONG DOWNLOADER ❯❯❯*

> ➤ *𝗧𝗜𝗧𝗟𝗘* - ${data.title}

> ➤ *𝗩𝗜𝗘𝗪𝗦* - ${data.views}

> ➤ *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* - ${data.description}

> ➤ *𝗧𝗜𝗠𝗘* - ${data.timestamp}

> ➤ *𝗔𝗚𝗢* - ${data.ago}

> *ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"> *ᴘᴏᴡᴇʀᴅ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ➤*"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    react: "📽️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please enter a Name or a url❗*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `*❮❮ SHADOW VIDEO DOWNLOADER ❯❯*

> ➤ *𝗧𝗜𝗧𝗟𝗘* - ${data.title}

> ➤ *𝗩𝗜𝗘𝗪𝗦* - ${data.views}

> ➤ *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* - ${data.description}

> ➤ *𝗧𝗜𝗠𝗘* - ${data.timestamp}

> ➤  *𝗔𝗚𝗢* - ${data.ago}

> *ꜱʜᴀᴅᴏᴡ ᴍᴅ ᴡᴀᴛꜱ ᴀᴘᴘ ʙᴏᴛ ⚟*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"> *ᴘᴏᴡᴇʀᴅ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ➤*"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
