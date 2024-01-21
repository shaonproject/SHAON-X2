module.exports.config = {
  name: "listvideo",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "Shaon Ahmed", //don't change the credits please
  description: "Admin and Bot info.",
  commandCategory: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.postimg.cc/GtXBfDsd/20230923-082425.jpg",
            "https://i.postimg.cc/5NtQCsZ0/20230923-082409.jpg",

"https://i.postimg.cc/QtkKpw8B/20230923-082348.jpg",
"https://i.postimg.cc/nrFjT2r3/20230923-082329.jpg",
            "https://i.postimg.cc/L4DZ5cQw/20230923-082259.jpg",];var callback = () => api.sendMessage({body:`╭──────•𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃•──────╮

 ☢━━━━━━💛𝙰𝙻𝙻 𝚅𝙸𝙳𝙴𝙾 𝙻𝙸𝚂𝚃💛━━━━━━☢ 
 !
 !➤1 𝙸𝚂𝙻𝙰𝙼 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤2 𝙰𝙽𝙸𝙼𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤3 𝚂𝙷𝙰𝙸𝚁𝙸 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤4 𝚂𝙷𝙾𝚁𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤5 𝚂𝙰𝙳𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤6 𝚂𝚃𝙰𝚃𝚄𝚂 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤7 𝚂𝚃𝙰𝚃𝚄𝚂2 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤8 𝙵𝚄𝙽𝙽𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤9 𝙻𝙾𝚅𝙴 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤10 𝙲𝙻𝙿 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤11 𝙱𝙰𝙱𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤12 𝙺𝙾𝚂𝚃𝙾 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤13 𝙻𝙾𝙵𝙸 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤14 𝙷𝙰𝙿𝙿𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤15 𝙷𝚄𝙼𝙰𝙸𝚈𝚄𝙽 𝚂𝙸𝚁 𝚅𝙸𝙳𝙴𝙾◄┈╯
 ☢━━━━━━💚𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾 𝙻𝙸𝚂𝚃💚━━━━━━☢
 !
 !➤16 𝚂𝙴𝚇 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤17 𝙷𝙾𝚁𝙽𝚈 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤18 𝙸𝚃𝙴𝙼 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤19 𝙷𝙾𝚃 𝚅𝙸𝙳𝙴𝙾◄┈╯
 !
 !➤20 𝚇𝚅𝙸𝙳𝙴𝙾◄┈╯
 ━━━━━━━━━━━━━━━━━━━━━
 𝙾𝚆𝙽𝙴𝚁:𝚂𝙷𝙰𝙾𝙽 𝙰𝙷𝙼𝙴𝙳
 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  𝙰 𝙿 𝙸//𝚂𝙷𝙰𝙾𝙽
━━━━━━━━━━━━━━━━━━━━━
╰──────•𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃•──────╯`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };