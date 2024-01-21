const API = "https://api.violetics.pw/api/textpro/thundertext?apikey=9b05-9b0e-2953&text="
module.exports.config = {
	name: "namelogo",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙢𝙖𝙝𝙛𝙪𝙟 𝗔𝗵𝗺𝗲𝗱",
	description: "name logo",
	commandCategory: "text maker",
	usages: "namelogo<text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    anup = args.join(" ");
    (event.type == "message_reply") ? anup = event.messageReply.attachments[0].url: anup = args.join(" ");
    const pathsave = __dirname + `/cache/banner2.png`;
    let imageBuffer;
    api.sendMessage("〠ↈ༽একটু পর তোর নামের লোগো পেয়ে যাবি ওয়েট কর আমার বস মাহফুজ কাজ করতাসে༼ↈ〠", event.threadID, event.messageID);
    axios.get(`${API}${encodeURI(anup)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `ↈ⋈༽এই নে হালার পুত তোর লোগো আর আমার বস মাহফুজ কে একটা গফ দে༼⋈ↈ`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`An error has occurred ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};