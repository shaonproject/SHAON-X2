module.exports.config = {
	name: "onbot",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "𝙢𝙖𝙝𝙛𝙪𝙟",
	description: "Enable Bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("onbot",event.threadID, () =>process.enter(0))
