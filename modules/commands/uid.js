module.exports.config = {
	name: "uid3",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Shaon Ahmed",
	description: "Get your user ID",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = function({ api, event }) {
	if (Object.keys(event.mentions) == 0) return api.sendMessage(`🔗 Tmr User ID: \n${event.senderID}\n\n🔗 Tmr Messenger Chat Link:\nm.me/${event.senderID}\n\n🔗 Tmr Facebook Profile Link:\nwww.facebook.com/${event.senderID}`, event.threadID, event.messageID);
	else {
		for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
		return;
	}
  }