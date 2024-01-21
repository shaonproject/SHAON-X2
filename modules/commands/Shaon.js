const fs = require("fs");
module.exports.config = {
	name: "Sikha2",
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
	if (event.body.indexOf("Hmm")==0 || event.body.indexOf("Bolo")==0 || event.body.indexOf("হুম")==0 || event.body.indexOf("বলো")==0) {
		var msg = {
				body: "সব কিছুর জবাব দেওয়া যায় , কিন্তু হুম এর জবাব কিভাবে দিবো 😅💔\n\n         ◤𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱◢",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }