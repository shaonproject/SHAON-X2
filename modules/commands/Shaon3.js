const dipto = require('axios');
const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const pathFile = __dirname + '/cache/d1p.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "🥺",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Shaon Ahmed",
  usePrefix: true,
  description: "when send ,🥺 then response",
  commandCategory: "no prefix",
  usages: "🥺",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event }) => {
  if (isEnable == "true"){
  const dipto2 = event.body ? event.body.toLowerCase() : '';
    // const now = moment.tz('Asia/Dhaka');
     // const Time = now.format('【hh:mm:ss A】');
      var Time = moment.tz("Asia/Dhaka").format("LLLL");
const imgur = ["https://i.imgur.com/LfBLinV.mp4",
"https://drive.google.com/uc?id=1kzOWQLqO8Vgf4WxSHhyR_PMFawJVi16B",
"https://drive.google.com/uc?id=1l3z38YS22vZ8NFYB_o4ybw3hlHNWwjGZ",
"https://drive.google.com/uc?id=1kl2seRoOFqmdiJeML4MeAYHfgjdcw_vZ",
"https://drive.google.com/uc?id=1n-amazVdxj09qXAb3sV1skSjLmkC4u8B",
"https://drive.google.com/uc?id=1cGtGK-zE7BLAzFy5kkYRUm-YLJYdai1O", 
"https://drive.google.com/uc?id=1cgvZJuB9NW3ena0Wr8dESbpk-6dlsFj6",
"https://drive.google.com/uc?id=1cTxtHQa6xk97CYMbwH7e7zmaT8ZeR_gJ",
"https://drive.google.com/uc?id=1cP0tiKH_ylRc_PuitO3RJMEJlAADENLg",
"https://drive.google.com/uc?id=loo1cO1igShqcPWQ0Bf0XDJ-36iIVXncnpvU",
"https://drive.google.com/uc?id=1cL0PGF1W8ul-yGL4N6NdkcWUn25TwhGa",
"https://drive.google.com/uc?id=1cXoUCmbUlUsAgGlmRM9B3JURm9BSphsY",
"https://drive.google.com/uc?id=1cDdW3_yJqVKycRNIntMmlspGYq3iwT6M",
"https://drive.google.com/uc?id=1cCFKlxCRKtvyfIJnFdlR4UiXUs-Kzx79",
"https://drive.google.com/uc?id=1cDQI2DQYvYaP1rJx6XxD9dIuFcJVqFOr",
"https://drive.google.com/uc?id=1drivesdk1cCk9QIQiZXYy3Rc0qlKGljt6EvMF8PLP",
"https://drive.google.com/uc?id=1csR4qF02jero5oj_aHU5WRiDOf8UJL80", 
"https://drive.google.com/uc?id=1cdnqY-zJdlaJ8he0x3HDWaYlLlhEoLla",
"https://drive.google.com/uc?id=1cjrX8DNFVe5Ny1due6nHjTrlv_hAZkqy",
"https://drive.google.com/uc?id=1dFOeSHeMjObMugJ5w6k6qnx3kj5MZ05R",
"https://drive.google.com/uc?id=1dOHNSOWLO_r4FXZbi80q1X8zSEoI8QwB",
"https://drive.google.com/uc?id=1d396VqbIbfAzN6DOdcaGuKVmQvEEBvjZ",
"https://drive.google.com/uc?id=1clorx5lULo2hMTg5ge39HNAhg9TdRZag",
"https://drive.google.com/uc?id=1cqrnjCh8DBYx11HqophcrAOIopwr0kQe",
"https://drive.google.com/uc?id=1d9NQw50iUZEbt6ruRf7rXoVOUuWnNjh0",
"https://drive.google.com/uc?id=1dBCdqD-_jGkrPY4G_CgFLHsBqE02P1p0",
"https://drive.google.com/uc?id=1czRLXfahFvv8k_xJ79hUDfoOCO66OKXS", 
"https://drive.google.com/uc?id=1dP2PMac3jp_Vp9wxFTcvNu-8QvhR9ws9"
]
  const link = imgur[Math.floor(Math.random() * imgur.length)];
  const res = await dipto.get(link, { responseType: 'arraybuffer' })
const ex = path.extname(link);
  const filename = __dirname + `/cache/dipto3.mp4`;
  fs.writeFileSync(filename, Buffer.from(res.data, 'binary'));
  if (dipto2.includes("🥺") || dipto2.includes("😭") || dipto2.includes("🙂") || dipto2.includes("😔") || dipto2.includes("😢") || dipto2.includes("🥹") || dipto2.includes("😓") || dipto2.includes("Sad") || dipto2.includes("😞") || dipto2.includes("😒"))
  {
api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n
︵🦋🥀    シ-𝐃𝐨𝐧’𝐭”𝐂𝐫𝐲”𝐅𝐨𝐫” 𝐒𝐨𝐦𝐞𝐨𝐧𝐞..”!😇🙂



   •🌸-  𝘁𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲 🐰✨

>- ভাগ্যে না থাকলে হাজার কেদেঁও কোনো লাভ নাই..!..😊🦋



︵🦋❤️‍🩹\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${global.config.PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🥺\n[⌛]  𝐃𝐚𝐭𝐞  : ${Time} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(filename)},event.threadID,() => fs.unlinkSync(filename),event.messageID)
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