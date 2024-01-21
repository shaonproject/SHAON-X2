const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "🕌",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Shaon Ahmed",
  usePrefix: true,
  description: "when send ,🕌 then response",
  commandCategory: "no prefix",
  usages: "🕌",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
    // const now = moment.tz('Asia/Dhaka');
     // const Time = now.format('【hh:mm:ss A】');
      var Time = moment.tz("Asia/Dhaka").format("LLLL");
const imgur = ["https://i.imgur.com/g0dpYGm.mp4",
"https://drive.google.com/uc?id=1my0Qs9K60k3V0pb3AVZ1P-IE9Nhx4NOm",
"https://drive.google.com/uc?id=1mvRxV8PgSg4ja10BVPpGx7dU-cYc3vB",
"https://drive.google.com/uc?id=1mzkKdGjYXd3xFTQmLK7_Q87bf9Lu4235",
"https://drive.google.com/uc?id=1msyXgtT8SlcGHwjAm3cQlKiAssEO-AgI",
"https://drive.google.com/uc?id=1my6LKsQYTpYlpV48NI8_CJAxdhIkB612",
"https://drive.google.com/uc?id=1mwVWobITdE3n3bvAIsEA6Av4m7FI2RXI"
]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/dipto3.mp4`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.includes("🕌") || dipto2.includes("জুম্মাহ মোবারক") || dipto2.includes("জুম্মাহ মুবারক") || dipto2.includes("Jummah") || dipto2.includes("Jummah Mubarak") || dipto2.includes("Mubarak"))
  {
api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n
❂\n            🫶💜🪽
\n___𝗔𝘀𝘀𝗮𝗹𝗮𝗺𝘂 𝗔𝗹𝗮𝗶𝗸𝘂𝗺_♡༢\n
 ___𝗝𝘂𝗺𝗺𝗮𝗵 𝗠𝘂𝗯𝗮𝗿𝗮𝗸♡🩷🕌\n\n#SHAON 卝 চৌধুরীヅ\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${global.config.PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🕌\n[⌛]  𝐃𝐚𝐭𝐞  : ${Time} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
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