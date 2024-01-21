module.exports.config = {
  name: "fb",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "Fb Vid Downloader",
  commandCategory: "other",
  usages: "fb video link",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");

  if (!args[0]) {
    api.sendMessage("╭•┄┅════❁🌺❁════┅┄•\n\nআসসালামু আলাইকুম-!!🖤💫\n ফেসবুক ভিডিও ডাওনলোড এর জন্য ফেসবুক ভিডিও লিংক দিন\n\n•┄┅════❁🌺❁════┅┄•", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨 𝐩𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭..⌛", event.threadID, event.messageID);

  try {
    let path = __dirname + `/cache/fbVID.mp4`;

    const aa = await axios.get(`https://edadf718-cb20-4646-85d3-7a945c56a8e6-00-tvxjmdy06v16.riker.replit.dev/tiktok/downloadvideo?apikey=ThanhAliVip_1234567890&url=${encodeURI(link)}`);

    const vid = (await axios.get(aa.data.data, { responseType: "arraybuffer", })).data;

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));

    api.sendMessage({
      body: `𝐀𝐩𝐢//𝐒𝐡𝐚𝐨𝐧💚🌸\n\n𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥 𝐃𝐚𝐰𝐧𝐥𝐨𝐚𝐝 𝐘𝐨𝐮𝐫 𝐕𝐢𝐝𝐞𝐨✨🌺`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };

};