module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "shaon",
	description: "Off Bot",
	commandCategory: "System",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("মাহফুজকে দেখে রাখিস আমি ছাড়া বেচারার কেউ নাই রে🥀😒আল্লাহ হাফেজ-! ",event.threadID, () =>process.exit(0))