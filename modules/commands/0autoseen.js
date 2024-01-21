module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱",
	description: "mark group",
	commandCategory: "system",
  usages: "",
	cooldowns: 0
};

module.exports.handleEvent = async ({ api, event, args }) => {
    api.markAsReadAll(() => {});
};

module.exports.run = async function({}) {}