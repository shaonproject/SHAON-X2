const fbname = "thanghokngu1";
const githubname = "HanakuUwU";
module.exports.config = {
  name:"upt1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Mirai-Team",
  description: "Random ảnh theo api - uptime",
  commandCategory: "Thông Tin",
  cooldowns: 3,
  dependencies: {
    "pidusage": ""
  }
};
function byte2mb(bytes) {
  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let l = 0, n = parseInt(bytes, 10) || 0;
  while (n >= 1024 && ++l) n = n / 1024;
  return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
  const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Dhaka").format("DD/MM/YYYY - hh:mm:ss A");
  var thu = moment.tz('Asia/Dhaka').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
       const getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "Đê𝐦 𝐊𝐡𝐮𝐲𝐚" : getHours < 8 ? "𝐁𝐮ổ𝐢 𝐒á𝐧𝐠" : getHours < 12 ? "𝐁𝐮ổ𝐢 𝐓𝐫ư𝐚" : getHours < 17 ? "𝐁𝐮ổ𝐢 𝐂𝐡𝐢ề𝐮" : getHours < 23 ? "𝐁𝐮ổ𝐢 𝐓ố𝐢" : "Đê𝐦 𝐊𝐡𝐮𝐲𝐚"}` 
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  var z_1 = (hours < 10) ? '0' + hours : hours;
    var x_1 = (minutes < 10) ? '0' + minutes : minutes;
    var y_1 = (seconds < 10) ? '0' + seconds : seconds;
    const axios = require('axios')
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const timeStart = Date.now();
  const fs = require('fs-extra');
   if (!fs.existsSync(__dirname + `/tad/Grandstander-Bold.ttf`)) {
    let getfont2 = (await axios.get(`https://github.com/hanakuUwU/font/raw/main/Grandstander-Bold.ttf`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + `/tad/Grandstander-Bold.ttf`, Buffer.from(getfont2, "utf-8"));
  };
   const { loadImage, createCanvas, registerFont } = require("canvas");

  let k = args[0];
   if(args[0] == "list"){
    const alime = (await axios.get('https://run.mocky.io/v3/6aa59c3e-ff9f-41cd-8611-07a1b870042d')).data
    var count = alime.listAnime.length;
      var data = alime.listAnime
      var page = 1;
      page = parseInt(args[1]) || 1;
      page < -1 ? page = 1 : "";
      var limit = 20;
      var numPage = Math.ceil(count/limit);
      var msg = ``;
      for(var i = limit*(page - 1); i < limit*(page-1) + limit; i++){
         if(i >= count) break;
        msg += `[ ${i+1} ] - ${data[i].ID} | ${data[i].name}\n`;
      }
      msg += `Trang (${page}/${numPage})\nDùng ${global.config.PREFIX}${this.config.name} list <số trang>`;
      return api.sendMessage(msg, event.threadID,event.messageID);
   }
  if(!k){
  var id = Math.floor(Math.random() * 848) +1
  } else {
    var id = k
  }
    const lengthchar = (await axios.get('https://run.mocky.io/v3/0dcc2ccb-b5bd-45e7-ab57-5dbf9db17864')).data
    console.log(lengthchar.length)
  const Canvas = require('canvas');
   let pathImg = __dirname + `/tad/avatar_115.png`;
    let pathAva = __dirname + `/tad/avatar_223.png`;
    let avtAnime = (
      await axios.get(encodeURI(`${lengthchar[id].imgAnime}`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathAva, Buffer.from(avtAnime, "utf-8"));
         let background = (await axios.get(encodeURI(`https://i.imgur.com/MDezSSb.jpg`), { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(background, "utf-8"));
    const request = require('request');
    const path = require('path');
let a = await loadImage(pathAva)
    let a1 = await loadImage(pathImg)
    let canvas = createCanvas(a1.width, a1.height);
    let
      ctx = canvas.getContext("2d");
    ctx.fillStyle = lengthchar[id].colorBg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(a1, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(a, 310, -120, 400, 600);
    Canvas.registerFont(__dirname + `/tad/Grandstander-Bold.ttf`, {
      family: "Grandstander"
    });
    ctx.textAlign = "center";
    ctx.font = "50px Grandstander";
    ctx.save();
    ctx.fillText(`${z_1}:${x_1}:${y_1}`, canvas.width / 2 - 150,  200);
    ctx.restore();
    ctx.save();
    ctx.textAlign = "start";
    ctx.font = "40px Grandstander";
    ctx.fillStyle = "#000CC";
    ctx.fillText(`Hon-Cute`, 135, 140);
    ctx.font = "40px Grandstander";
    ctx.fillStyle = "#000CC";
    ctx.fillText(`Ben-Cuto`, 135, 240);
    ctx.beginPath();
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
  return api.sendMessage({
    body: `👾 𝐇𝐢𝐞̣̂𝐧 𝐭𝐚̣𝐢 𝐥𝐚̀: ${thu} ${gio} 𝐕𝐚̀ 𝐁𝐎𝐓 𝐜𝐮̉𝐚 𝐁𝐞𝐧 𝐜𝐡𝐚̣𝐲 đ𝐚̃ 𝐤𝐞̂́𝐭 𝐧𝐨̂́𝐢 𝐭𝐨̂̉𝐧𝐠 𝐜𝐨̣̂𝐧𝐠 ${hours} 𝐠𝐢𝐨̛̀ ${minutes} 𝐩𝐡𝐮́𝐭 ${seconds} 𝐠𝐢𝐚̂𝐲\nIDNV: ${id}.
👻──── •💜• ────👻
ㅤ===🗃 𝗗𝗔𝗧𝗔 𝗨𝗦𝗘𝗥 🗃===
🎎 𝐓𝐨̂̉𝐧𝐠 𝐧𝐠𝐮̛𝐨̛̀𝐢 𝐝𝐮̀𝐧𝐠: ${global.data.allUserID.length}
🏩 𝐓𝐨̂̉𝐧𝐠 𝐧𝐡𝐨́𝐦: ${global.data.allThreadID.length}\n🔍𝐓ổ𝐧𝐠 𝐬ố 𝐥ệ𝐧𝐡 𝐡𝐢ệ𝐧 𝐜ó: ${client.commands.size}
ㅤ=====🖥 𝗦𝗬𝗦𝗧𝗘𝗠 🖥=====
🎮 𝐁𝐨𝐭 𝐓𝐲𝐩𝐞: 𝐁𝐞𝐧-𝐇𝐨𝐧
🐳 𝐏𝐫𝐞𝐟𝐢𝐱: ${global.config.PREFIX}
💻 𝐂𝐩𝐮 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${pidusage.cpu.toFixed(1)}
📈 𝐑𝐚𝐦 đ𝐚𝐧𝐠 𝐬𝐮̛̉ 𝐝𝐮̣𝐧𝐠: ${byte2mb(pidusage.memory)}
🌐 𝐏𝐢𝐧𝐠: ${Date.now() - timeStart}
💬 𝐓𝐡𝐢́𝐧𝐡: Vận tốc trái tim nhanh không em nhỉ? Để anh tính quãng đường đi đến trái tim em..
🎀──── •🌸• ────🎀
ℕ𝔾𝕌𝕐Ễℕ 𝔻𝕌𝕐 𝕋Âℕ\n𝐂𝐡ú𝐜 𝐛ạ𝐧 𝐜ó 𝐦ộ𝐭 ${session} 𝐯𝐮𝐢 𝐯ẻ`, 
    attachment: fs.createReadStream(pathImg)
  },
    event.threadID,
    () => fs.unlinkSync(pathImg),
    fs.unlinkSync(pathAva),
    event.messageID
  );
    }