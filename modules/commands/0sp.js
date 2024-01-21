module.exports.config = {
  name: "sptify",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "random love story video",
  commandCategory: "video",
  usages: "random",
  cooldowns: 30,
};


module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { spotify } = require('nayan-server')
    const text = args.join(" ")
    
    const res = await spotify(`${text}`);
  console.log(res);
    var data = res.data;
    var msg = [];
    let img1 = `${res.data.audio}`;
    let cp = `${res.data.title}`

    let imgs1 = (await axios.get(`${img1}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img.mp3", Buffer.from(imgs1, "utf-8"));
    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img.mp3"));
	
    {
        msg += `${cp}`
    }
    
    return api.sendMessage({
        body: msg,
        attachment: allimage
    }, event.threadID, event.messageID);
}