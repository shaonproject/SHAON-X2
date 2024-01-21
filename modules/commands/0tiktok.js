module.exports.config = {
  name: "sura", 
  version: "1.0.0", 
  permission: 0,
  credits: "Shaon Ahmed",
  usePrefix: false,
  description: "Random sura video",
  commandCategory: "Media", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "fs":""
  }
};

const videoDATA = "https://video-api-5i3d.onrender.com/video/ayat";

module.exports.onLoad = ({}) => {
  if (!global.nodemodule["fs"].existsSync(__dirname + '/Shaon-api')) {
    global.nodemodule["fs"].mkdirSync(__dirname + '/Shaon-api');
  }
  global.nodemodule["fs"].readdirSync(__dirname + '/Shaon-api').forEach(file => {
    global.nodemodule["fs"].unlinkSync(__dirname + `/Shaon-api/${file}`);
  })
}

module.exports.run = async ({ api, event }) => {
  global.nodemodule["axios"]
    .get(videoDATA)
    .then(res => {
      global.nodemodule["axios"]
        .get(encodeURI(res.data.data), { responseType: "arraybuffer" })
        .then(ress => {
          let path = __dirname + `/Shaon-api/${Date.now()}.mp4`;
          global.nodemodule["fs"].writeFileSync(path, Buffer.from(ress.data, 'utf-8'));
          api.sendMessage({
            body: "🌸ইসলামিক || সূরা🍒🐰\n        use headphone for batter sound\n         Credit: Shaon Ahmed🐰",
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