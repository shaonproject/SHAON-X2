const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "hd",
  version: "2.2",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "hd",
  commandCategory: "no prefix",
  usages: "Reply to a photo to enhance image ",
  cooldowns: 2,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("hd") === 0 || event.body.indexOf("Hd") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  const pathie = __dirname + `/cache/zombie.jpg`;
  const { threadID, messageID } = event;

  const photoUrl = event.messageReply.attachments[0] ? event.messageReply.attachments[0].url : args.join(" ");

  if (!photoUrl) {
    api.sendMessage("•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\nআপনি যেই ছবি HD করতে চান সেই ছবি টি দিয়ে রিপ্লাই sms দিন\n\n•┄┅════❁🌺❁════┅┄•", threadID, messageID);
    return;
  }

  api.sendMessage("╭•┄┅════❁🌺❁════┅┄•╮\n\n অপেক্ষা করুন আপনার  ছবিটি HD তে রুপান্তরিত করা হচ্ছে-!!⌛\n\n╰•┄┅════❁🌺❁════┅┄•╯", threadID, async () => {
    try {
      const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/remini?url=${encodeURIComponent(photoUrl)}`);
      const processedImageURL = response.data.image_data;
      const img = (await axios.get(processedImageURL, { responseType: "arraybuffer" })).data;

      fs.writeFileSync(pathie, Buffer.from(img, 'binary'));

      api.sendMessage({
        body: "╭•┄┅════❁🌺❁════┅┄•╮\n\nআপনার ছবি টি HD তে  পরিবর্তন করা হলো\n\n╰•┄┅════❁🌺❁════┅┄•╯",
        attachment: fs.createReadStream(pathie)
      }, threadID, () => fs.unlinkSync(pathie), messageID);
    } catch (error) {
      api.sendMessage(` ❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀: ${error}`, threadID, messageID);
    }
  });
};

module.exports.run = async function ({ api, event }) {};