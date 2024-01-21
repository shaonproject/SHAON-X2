const fs = require("fs");
module.exports.config = {
	name: "Sikha7",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱", 
	description: "hihihihi",
	commandCategory: "Shaon",
	usages: "Shikha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😌")==0 || event.body.indexOf("😒")==0 || event.body.indexOf("💔")==0 || event.body.indexOf("😿")==0) {
		var msg = {
				body: "I wish! আমার মৃত্যুটা যেন নিঝুম বৃষ্টির দিনে হয়..!! \nআর প্রিয়জনরা যেন দেখার সুযোগ না পায়..!!🙂🖤🥀\n\n       ◤𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱◢",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon6.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }