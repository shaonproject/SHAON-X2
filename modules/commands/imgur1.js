const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "imgur1",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "shaon Ahmed",
  description: "Imgur",
  commandCategory: "Shaon",
  usages: "[reply]",
  cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "img.jpeg")) request("https://i.imgur.com/qxcO7pe.jpeg").pipe(fs.createWriteStream(dirMaterial + "img.jpeg"));
      }
module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Dhaka").format("DD/MM/YYYY || hh:mm:ss");
const fs = require("fs");
  const ClientID = "c76eb7edd1459f3"
  if (type !== "message_reply" || messageReply.attachments.length == 0) return api.sendMessage("❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", threadID, messageID);
  imgur.setClientId(ClientID);
  const attachmentSend = [];
  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext = data.type == "photo" ? "jpg" :
        data.type == "video" ? "mp4" :
          data.type == "audio" ? "m4a" :
            data.type == "animated_image" ? "gif" : "txt";
      const pathSave = __dirname + `/cache/${startFile}.${ext}`
      ++startFile;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
    }
  }
  await getAttachments(messageReply.attachments);
  let msg = "", Succes = 0, Error = [];
  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage)
      console.log(getLink);
      msg += `${++Succes}/ ${getLink.link}\n`
      fs.unlinkSync(getImage)
    } catch {
      Error.push(getImage);
      fs.unlinkSync(getImage)
    }
  }
  return api.sendMessage({body: `====『 𝗜𝗠𝗚𝗨𝗥 𝗨𝗣𝗟𝗢𝗔𝗗 』====\n━━━━━━━━━━━━━━━━━━━\n Successfully Upload : ${Succes}\n→ ☣️ : ${Error.length}\n━━━━━━━━━━━━━━━━━━\n🌸 Your Imgur Video Link:\n${msg}`, attachment: fs.createReadStream(__dirname + `/noprefix/img.jpeg`)}, event.threadID, event.messageID);
}