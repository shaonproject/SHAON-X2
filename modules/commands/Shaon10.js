const fs = require("fs");
module.exports.config = {
	name: "Sikha10",
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
	if (event.body.indexOf("❤️")==0 || event.body.indexOf("😗")==0 || event.body.indexOf("😙")==0 || event.body.indexOf("😉")==0) {
		var msg = {
				body: "༉༎ 🐰🍒𝐓𝐡𝐢𝐬 𝐚𝐛𝐮𝐭 𝐥𝐢𝐧𝐞🐰🍒\n\n༊༎একটু আড়াল হলেই বোঝা যায় নিজের অস্তিত্ব অন্যের কাছে কতটা মূল্যবানღ﹏🙂🦋\n\n___^💚🍂\n\n         ◤𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱◢",
				attachment: fs.createReadStream(__dirname + `/Shaon/Shaon10.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }