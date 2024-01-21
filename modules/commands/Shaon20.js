const fs = require("fs");
module.exports.config = {
	name: "🙄",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙄",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😒")==0 || event.body.indexOf("🤨")==0 || event.body.indexOf("🙄")==0 || event.body.indexOf("🙄")==0) {
		var msg = {
				body: "অৃ্ঁই্ঁ বেৃ্ঁডাৃ্ঁ ওৃ্ঁইৃ্ দি্ৃঁকেৃ্ঁ কিৃ্ দেৃ্ঁখৃ্ঁসৃ্ঁ😒🤷‍♂️🌝🌚★Thank you for. Auto Replied★Bot Developer🤧 SHAON AHMED 😘Emoji File Creator★🤕",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon11.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }