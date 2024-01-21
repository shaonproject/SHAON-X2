module.exports.config = {
	name: "ঈদ",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "𝙢𝙖𝙝𝙛𝙪𝙟 Ahmed ",
	description: "Ramadan asar time ck",
	commandCategory: "0",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("April 10, 2024 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`🕌🥰 অ্ঁগ্রি্ঁম্ঁ ঈ্ঁদে্ঁর্ঁ শু্ঁভে্ঁচ্ছা্ঁ🥰🕌\n\n❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎\n\nخوف خدا دیکھنا ہے تو مسلمان کا دیکھ جو روزے میں وضو کا پانی منہ میں لیکر بھی پیتا نہیں ہے\n\n❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎❣︎\n\n🥰ঈদ আসতে সময় বাকি ${days} দিন ${hours} ঘন্টা ${minutes} মিনিট ${seconds} সেকেন্ড মাএ🥰\n\n❣️CREDIT❣️ : 🌹𝗦𝗛𝗔𝗢𝗡 𝗔𝗛𝗠𝗘𝗗🌹`, event.threadID, event.messageID);
}