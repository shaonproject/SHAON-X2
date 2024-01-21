const shaon = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1pt0.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'true');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "prefix2",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝐒𝐡𝐚𝐨𝐧 𝐀𝐡𝐦𝐞𝐝",
  usePrefix: true,
  description: "when send ,prefix then response",
  commandCategory: "bot prefix",
  usages: "prefix",
  cooldowns: 5,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const shaon2 = event.body ? event.body.toLowerCase() : '';
    const GP = "𝐒𝐇𝐀𝐎𝐍 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗";
     let shaonInfo = await api.getThreadInfo(event.threadID);
  let shaonName = shaonInfo.threadName;
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  const text = `╭•┄┅════❁🌺❁════┅┄•╮\n${GP}\n╰•┄┅════❁🌺❁════┅┄•╯\n\n𝐁𝐎𝐓 𝐍𝐀𝐌𝐄 : ${global.config.BOTNAME}\n𝐑𝐎𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ｢ ${global.config.PREFIX} ｣\n𝐑𝐎𝐁𝐎𝐓 𝐂𝐌𝐃: ｢ ${client.commands.size} ｣\n𝐓𝐈𝐌𝐄 : ${time}\n𝐆𝐑𝐎𝐔𝐏 𝐍𝐀𝐌𝐄: ${shaonName}\n`
  //const text2 = text[Math.floor(Math.random() * text.length)];
const imgur = [
    "https://i.imgur.com/YQqtWTq.mp4",
    "https://i.imgur.com/T3q9mVV.mp4",
    "https://i.imgur.com/aw4XuRd.mp4",
    "https://i.imgur.com/6YSirXX.mp4",
    "https://i.imgur.com/QvHsIpD.mp4",
    "https://i.imgur.com/2hHRhMS.mp4",
    "https://i.imgur.com/22tlzch.mp4",
    "https://i.imgur.com/0Evnr20.mp4",
    "https://i.imgur.com/frVpqlJ.mp4",
    "https://i.imgur.com/zPUbsME.mp4",
    "https://i.imgur.com/SqF6sIU.mp4",
    "https://i.imgur.com/qN7Fflb.mp4",
    "https://i.imgur.com/UzQdy4E.mp4",
    "https://i.imgur.com/wE3hdM7.mp4",
    "https://i.imgur.com/mXbCHsZ.mp4",
    "https://i.imgur.com/oz1JXQg.mp4",
    "https://i.imgur.com/oiUOID0.mp4",
    "https://i.imgur.com/JAdOkeJ.mp4",
    "https://i.imgur.com/JXA416Z.mp4",
    "https://i.imgur.com/kOY4aue.mp4",
    "https://i.imgur.com/6IfgAGb.mp4",
    "https://i.imgur.com/hBKk51U.mp4",
    "https://i.imgur.com/cDKnBQ5.mp4",
    "https://i.imgur.com/yNvmoVR.mp4",
    "https://i.imgur.com/aBwsJ8B.mp4",
    "https://i.imgur.com/k1MXIDu.mp4",
    "https://i.imgur.com/gjiNjmU.mp4",
    "https://i.imgur.com/9GGt1Kr.mp4",
    "https://i.imgur.com/3HcTYVZ.mp4",
    "https://i.imgur.com/ZumCrju.mp4"
    ]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await shaon.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/shaon009${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (shaon2.indexOf("prefix") ===0|| shaon2.indexOf("Prefix") ===0 )
  {
api.sendMessage({body:`${text}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
  }
 }
}
module.exports.run = async ({api,args, event}) => {
try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('no prefix on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('no prefix off successfully', event.threadID, event.messageID);
  }
  else if (!args[0]){
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }

}