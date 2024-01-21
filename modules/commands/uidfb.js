module.exports.config = {
	name: "uid2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy ID người dùng.",
	commandCategory: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios')
  const uid = event.type == 'message_reply' ? event.messageReply.senderID: !!Object.keys(event.mentions)[0] ? Object.keys(event.mentions)[0]: !!args[0] ? args[0]: event.senderID;
  const res = await axios.get(
		`https://api.quangbao.dev/facebook/finduid?uid=${uid}`
	);
	if (res.status == 200) {
		const uid = res.data.uid;
    const name = res.data.name;
		const date = res.data.day;
    const time = res.data.time;
    api.sendMessage(
				{
					body: `🌐===[ 𝗨𝗜𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ]===🌐
━━━━━━━━━━━━━━━━
🍄 𝗡𝗮𝗺𝗲: ${name}
📌 𝗜𝗗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${uid}\n📆 𝗗𝗮𝘁𝗲: ${date}\n⏰ 𝗧𝗶𝗺𝗲: ${time}\n`,
				}, event.threadID, event.messageID);
  }
}