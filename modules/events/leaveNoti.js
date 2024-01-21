module.exports.config = {
  name: "leave",
  eventType: ["log:unsubscribe"],
  version: "1.0.0",
  credits: "Shaon Ahmed",
  description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "leavemp4");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "leavemp4");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
  if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
  const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
  const { join } =  global.nodemodule["path"];
  const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("『DD/MM/YYYY』|| 【hh:mm:ss A】");
  const hours = moment.tz("Asia/Dhaka").format("hh");
  const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
  const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
  const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝚕𝚎𝚊𝚟𝚎" : "𝚔𝚒𝚌𝚔";
  const path = join(__dirname, "events", "Shaon.mp4");
  const pathGif = join(path, `${threadID}Shaon.mp4`);
  var msg, formPush

  if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "╔═══════▣𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃▣═══════╗     \n\n     《⚛𝙶𝙾𝙾𝙳 𝙱𝚈⚛》{name}   \n\n╚═══════▣𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃▣═══════╝ \n   《《《⚛ {type} ⚛》》》\n\n ✨🍂_সেই লোক দের দেখো যাদের ভাগ্য তুমার থেকে ও খারাপ \n\n  《《《⚛ {name} ⚛》》》\n\n   -সে সব লোক কে দেখো না__🙅‍♂️...!!\n যাদের ভাগ্য তুমার থেকে ভালো..😒😅\n  তা নাহলে তুমরা আল্লাহ কে বুলে যাবে...❤️🌸-!!\n\n  ✨🍒_যে এই সুন্দর  ইসলামিক গ্রুপ ছেরে চলে গেছে তার অনুসরণ তুমরা করো নাহ__//💙🥺-!!\n\n  𝚁𝚎𝚊𝚜𝚘𝚗: {type}\n 𝙻𝚎𝚊𝚟𝚎 𝚃𝚒𝚖𝚎👉||{time} " : msg = data.customLeave;
  msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "𝙈𝙤𝙧𝙣𝙞𝙣𝙜" : 
    hours > 10 && hours <= 12 ? "𝘼𝙛𝙩𝙚𝙧𝙉𝙤𝙤𝙣" :
    hours > 12 && hours <= 18 ? "𝙀𝙫𝙚𝙣𝙞𝙣𝙜" : "𝙉𝙞𝙜𝙝𝙩").replace(/\{time}/g, time);  

  const randomPath = readdirSync(join(__dirname, "cache", "leavemp4"));

  if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
  else if (randomPath.length != 0) {
    const pathRandom = join(__dirname, "cache", "leavemp4",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
    formPush = { body: msg, attachment: createReadStream(pathRandom) }
  }
  else formPush = { body: msg }

  return api.sendMessage(formPush, threadID);
                            }