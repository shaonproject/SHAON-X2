module.exports.config = {
  name: "uptime",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Shaon Ahmed",
  description: "Check the time the bot was online",
  commandCategory: "system",
  cooldowns: 5,
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

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');	
  const fs = require("fs");
  const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
  const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Dhaka").format("D/MM/YYYY || hh:mm:ss A");
  const timeStart = Date.now();
  let today = new Date();
      var Shaon = [
      "https://i.postimg.cc/GtXBfDsd/20230923-082425.jpg",
      "https://i.postimg.cc/5NtQCsZ0/20230923-082409.jpg",
      "https://i.postimg.cc/QtkKpw8B/20230923-082348.jpg",
      "https://i.postimg.cc/L4DZ5cQw/20230923-082259.jpg",
      "https://i.postimg.cc/qMvQSjyV/20230923-082329.jpg",
          ];
          var Shaon2 = () => api.sendMessage({body: `📅Today is: ${gio}\n🤖Bot is up and running ${hours} hour ${minutes} minute ${seconds} second ❤️.\n⚔Prefix: ${global.config.PREFIX}\n🔥Version: 2.0.0\n✅Total users: ${global.data.allUserID.length}\n🦖Total Group: ${global.data.allThreadID.length}\n⚡CPU in use: ${pidusage.cpu.toFixed(1)}\n⚠️Ram in use: ${byte2mb(pidusage.memory)}\n🔰Ping: ${Date.now() - timeStart}ms`, attachment: fs.createReadStream(__dirname + "/cache/Shaon1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/Shaon1.jpg"), event.messageID);
          return request(encodeURI(Shaon[Math.floor(Math.random() * Shaon.length)])).pipe(fs.createWriteStream(__dirname + "/cache/Shaon1.jpg")).on("close", () => Shaon2());
      };