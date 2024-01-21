const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "😘",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Shaon Ahmed",
  usePrefix: true,
  description: "when send ,😘 then response",
  commandCategory: "no prefix",
  usages: "😘",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
    // const now = moment.tz('Asia/Dhaka');
     // const Time = now.format('【hh:mm:ss A】');
      var Time = moment.tz("Asia/Dhaka").format("LLLL");
const imgur = ["https://i.imgur.com/uPBir34.mp4",
"https://drive.google.com/uc?id=1lh3e7y9DJbg9PBT0uqQukyGpdS25CYwZ",
      "https://drive.google.com/uc?id=1mFt0aZYF4D1cUvgG5K_CQGzJHcjMbnOD",
      "https://drive.google.com/uc?id=1mJnDNssz52TJlrwGh92i_nTk_sbnm2h7",
      "https://drive.google.com/uc?id=1mBNtCfEu03t9m8rCtY0me3DxwN3vQ5J7",
      "https://drive.google.com/uc?id=1mfI-Ik1nbwupNeEXmjNmVIut4hf6VUR0",
      "https://drive.google.com/uc?id=1mYbChhNIl0wvLCi6kwIV1vNSPHsjUfEO",
      "https://drive.google.com/uc?id=1mHCtHuM_mWH1grzAS_p4NXQjrV6uBm_M",
      "https://drive.google.com/uc?id=1mWIVbyfzsT3PdqOuGvlEUPrNP2lPIyBg",
      "https://drive.google.com/uc?id=1mKjxUOXZ09vYIvZss7L2rujMjH8dIrDu",
      "https://drive.google.com/uc?id=1mgHx9uu38Jwx2XH5Dd0Hf4J6YremfsLr",
      "https://drive.google.com/uc?id=1mLDgS5dBKl3_kXx-LRoMGK37cy2ia96b",
      "https://drive.google.com/uc?id=1miM7bwmC6M9Kb7KKY8O9rv-KcQK6Aizf"
]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/dipto3.mp4`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.includes("😘") || dipto2.includes("😽") || dipto2.includes("😻") || dipto2.includes("💝") || dipto2.includes("🧡") || dipto2.includes("🤎") || dipto2.includes("💛") || dipto2.includes("💘") || dipto2.includes("🤍") || dipto2.includes("💚"))
  {
api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n
❂\n  তোমাকে যতোদিন না নিজের করে পাচ্ছি,ততোদিন আমি অপূর্ণ থাকবো"!!🥺💫🖤\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${global.config.PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 😘\n[⌛]  𝐃𝐚𝐭𝐞  : ${Time} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
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