module.exports.config = {
  name: "autodl",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "All  Video Downloader",
  commandCategory: "Downloader",
  usages: "[video link]",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, client, __GLOBAL }) {
  const axios = require('axios');
const fs = require('fs-extra');
const tinyurl = require('tinyurl');
let shaon = event.body ? event.body : '';
  try {
if (shaon.startsWith('https://vt.tiktok.com') ||
    shaon.startsWith("https://vm.tiktok.com") ||
    shaon.startsWith('https://www.facebook.com') || 
    shaon.startsWith('https://fb.watch')||
    shaon.startsWith('https://www.instagram.com/')|| shaon.startsWith('https://youtu.be/') || shaon.startsWith('https://youtube.com/')){
  api.sendMessage("downloading video, please wait...", event.threadID, event.messageID);
  if (!shaon) {
    api.sendMessage("please put a valid video link", event.threadID, event.messageID);
    return;
    }
    const path = __dirname + `/cache/shaonn.mp4`;
    const aa = await axios.get(`https://759q5p-3000.csb.app/xnxx?url=${encodeURI(shaon)}`);
  const bb = aa.data.result;
  const shortUrl = await tinyurl.shorten(bb);
    const messageBody = `✅ 🔗 Download Url: ${shortUrl}`;
    const vid = (await axios.get(bb, { responseType: "arraybuffer", })).data;
  fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
    api.sendMessage({
      body: `${aa.data.cp}\n${messageBody}\nCredit:Shaon Ahmed`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID)}
if (shaon.startsWith('https://i.imgur.com')){
  const shaon3 = shaon.substring(shaon.lastIndexOf('.'));
  const response = await axios.get(shaon, { responseType: 'arraybuffer' });
const filename = __dirname + `/cache/shaon${shaon3}`;
    fs.writeFileSync(filename, Buffer.from(response.data, 'binary'));
    api.sendMessage({body: `Downloaded from link`,attachment: fs.createReadStream(filename)},event.threadID,
  () => fs.unlinkSync(filename),event.messageID)
}
} catch (e) {
api.sendMessage(`${e}`, event.threadID, event.messageID);
  };
};
module.exports.run = function({ api, event, client, __GLOBAL }) {

}