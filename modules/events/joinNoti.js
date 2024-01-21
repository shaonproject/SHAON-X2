module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱",
	description: "Notify bot or group member with random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
const { join } = global.nodemodule["path"];

const path = join(__dirname, "cache", "joinGif");
if (existsSync(path)) mkdirSync(path, { recursive: true });	

const path2 = join(__dirname, "cache", "joinGif", "randomgif");
if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

   return;
}


module.exports.run = async function({ api, event }) {
const { join } = global.nodemodule["path"];
const { threadID } = event;
if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {           api.changeNickname(`[${global.config.PREFIX} ]  ${(!global.config.BOTNAME) ? "bot" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
const fs = require("fs");
return api.sendMessage("🌸𝗦𝗛𝗔𝗢𝗡 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗜𝗦 𝗕𝗔𝗖𝗞👿", event.threadID, () => api.sendMessage({body:`⊰᯽⊱┈──╌──★★╌──╌──┈⊰᯽⊱\n_____💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐____\n⊰᯽⊱┈──╌──★★╌──╌──┈⊰᯽⊱\n________________________
🤖
BOT CONNECTED!!! 
adding in the group chat successfully!!!
😈 কিরে হালার পুতেরা শয়তানি করার জন্য অ্যাড দিছস 😈
____________________________________\n\nযেকোনো কমান্ড দেখতে ${global.config.PREFIX}help ব্যবহার করুন
\n\উদাহারণ:\n${global.config.PREFIX}admin (Bot Admin)\n${global.config.PREFIX}help (command s)\n${global.config.PREFIX}info (Bot Admin Info)
____________________________________
যেকোনো অভিযোগ অথবা হেল্প এর জন্য আমার 𝙱𝙾𝚂𝚂 𝚂𝙷𝙰𝙾𝙽 𝙰𝙷𝙼𝙴𝙳 কে নক করতে পারেন 
👉FB link: https://www.facebook.com/Hey.Its.Me.Shaon.Ahmed
-\n use {${global.config.PREFIX}𝙷𝙴𝙻𝙿} to see command `, attachment: fs.createReadStream(__dirname + "/cache/joinmp4/join1.mp4")} ,threadID));
	}
  else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("『DD/MM/YYYY』 ||【hh:mm:ss A】"); 
const hours = moment.tz("Asia/Dhaka").format("hh");
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinmp4");
			const pathGif = join(path, `${threadID}join.mp4`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "💐আ্ঁস্ঁসা্ঁলা্ঁমু্ঁ💚আ্ঁলা্ঁই্ঁকু্ঁম্ঁ💐\n\n🥰👉 {name}💟👈🐰\n\n{type} আ্ঁমা্ঁদে্ঁর্ঁ✺࿐\n\n🖤👉{threadName}👈🐰\n\nগ্রুঁপেঁর এ্ঁর্ঁ প্ঁক্ষ্ঁ🍀থে্ঁকে্ঁ🍀\n\n🥀_ভা্ঁলো্ঁবা্ঁসা্ঁ_অ্ঁভি্ঁরা্ঁম্ঁ_🥀🥰💟\n\n 😘👉{name}👈🐰\n\n༄✺আঁপঁনিঁ এঁইঁ গ্রুঁপেঁর {soThanhVien} নঁং মে্ঁম্বা্ঁরঁ ࿐🥰🎭\n\n𝗢𝗪𝗡𝗘𝗥: 𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱\n𝙹𝚘𝚒𝚗 𝚃𝚒𝚖𝚎👉{time}": msg = threadData.customJoin;
			msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? 'আপনাদের' : '༄✺আ্ঁপ্ঁনা্ঁকে')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "সকাল" : 
    hours > 10 && hours <= 12 ? "দুপুর" :
    hours > 12 && hours <= 18 ? "বিকাল" : "রাত্রি")
                .replace(/\{time}/g, time);  



			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
      
		} catch (e) { return console.log(e) };
	}
                                }