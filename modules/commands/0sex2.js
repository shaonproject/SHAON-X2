module.exports.config = {
  name: "sex2", 
  version: "1.0.0", 
  permission: 2,
  credits: "Shaon Ahmed",
  usePrefix: false,
  description: "Random Sex2 video",
  commandCategory: "Media", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};

const videoDATA = "https://video-api-5i3d.onrender.com/video/sex2";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/Shaon-Api')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/Shaon-Api');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/Shaon-Api').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/Shaon-Api/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/Shaon-Api/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "───※ ·❆· ※───\n☆《SEX VIDEO》☆\n//API SHAON🥵\n───※ ·❆· ※───",
            attachment: global.nodemodule["fs"].createReadStream(path)
          }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
          return;
        })
        .catch(e => {
          api.sendMessage("❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", event.threadID, event.messageID);
          return;
        });
    })
  .catch(e => {
    api.sendMessage("❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", event.threadID, event.messageID);
    return;
  });

  return;
}