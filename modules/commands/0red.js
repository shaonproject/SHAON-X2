module.exports.config = {
  name: "xvideo",
  version: "11.9.7",
  hasPermssion: 2,
  credits: "Shaon Ahmed",
  description: "redroom vids",
  commandCategory: "Not For Kids",
  usages: "",
  cooldowns: 30,
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  var red = ["https://video-api-5i3d.onrender.com/video/sex2", "https://video-api-5i3d.onrender.com/video/sex3", "https://video-api-5i3d.onrender.com/video/sex2", "https://video-api-5i3d.onrender.com/video/sex3", "https://video-api-5i3d.onrender.com/video/sex2", "https://video-api-5i3d.onrender.com/video/sex3", "https://video-api-5i3d.onrender.com/video/sex2", "https://video-api-5i3d.onrender.com/video/sex3", "https://video-api-5i3d.onrender.com/video/sex2",
"https://video-api-5i3d.onrender.com/video/sex3"]
  var redroom = red[Math.floor(Math.random() * red.length)]
  axios.get(redroom).then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let shaon = res.data.shaon;
  let callback = function () {
          api.sendMessage({
            body: `🥵${shaon}//𝐀𝐏𝐈 𝐒𝐇𝐀𝐎𝐍😋`,
            attachment: fs.createReadStream(__dirname + `/data/shaon1.mp4`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/data/shaon1.mp4`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/data/shaon1.mp4`)).on("close", callback);
      })
}
