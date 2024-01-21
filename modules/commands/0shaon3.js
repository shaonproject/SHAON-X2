const shaon = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/shaon.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "🖤",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Shaon Ahmed",
  usePrefix: true,
  description: "when send ,🖤 then response",
  commandCategory: "no prefix",
  usages: "🖤",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const shaon2 = event.body ? event.body.toLowerCase() : '';
    // const now = moment.tz('Asia/Dhaka');
     // const Time = now.format('【hh:mm:ss A】');
      var Time = moment.tz("Asia/Dhaka").format("LLLL");
const imgur = ["https://i.imgur.com/98nTMJb.mp4",
              "https://i.imgur.com/U8TIlos.mp4",
              "https://i.imgur.com/7YcGjj4.mp4",
              "https://i.imgur.com/VvPFoqI.mp4"]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await shaon.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/shaon0${ex}`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (shaon2.includes("🖤") || shaon2.includes("🖤") || shaon2.includes("🖤"))
  {
api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\nআল্লাহামদুলিল্লাহ আমাদের পবিত্র কাবা শরিফ 
🖤🕋🖤\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${global.config.PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🖤\n[⌛]  𝐃𝐚𝐭𝐞  : ${Time} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
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
  /*else {
    api.sendMessage(`Wrong format ${this.config.name}use off/on`, event.threadID, event.messageID);
  }*/
  }
  catch(e) {
    console.log(e);
  }

}