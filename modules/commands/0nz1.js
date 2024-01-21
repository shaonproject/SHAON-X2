module.exports.config = {
  name: "nz",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  usePrefix: false,
  description: "namaj time",
  commandCategory: "Islamic", 
  usages: "/nz[Dhaka]", 
  cooldowns: 0,
  dependencies: [] 
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const prompt = args.join(" ");

  if (!prompt) return api.sendMessage("[ ! ] Input Your address", event.threadID, event.messageID);


 const SHAON = `http://api.aladhan.com/v1/timingsByAddress?address=${encodeURIComponent(prompt)}`;

  try {
    const response = await axios.get(SHAON);
    const timings = response.data.data.timings;


    const ShaonApiUrl = "https://video-api-5i3d.onrender.com/video/status2";
    const videoResponse = await axios.get(ShaonApiUrl);
    const videoUrl = videoResponse.data.url.url;

    const videoBuffer = await axios.get(videoUrl, { responseType: 'arraybuffer' });

    fs.writeFileSync(__dirname + "/cache/video.mp4", Buffer.from(videoBuffer.data, "utf-8"));
    const videoReadStream = fs.createReadStream(__dirname + "/cache/video.mp4");

    const msg = `───※ ·SHAON PROJECT· ※───\n\nনামাযের-সময়:${prompt}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ফজর: ${timings.Fajr}\n\n╰┈► যহর: ${timings.Dhuhr}\n\n╰┈► আছর: ${timings.Asr}\n\n╰┈► সূর্যাস্ত: ${timings.Sunset}\n\n╰┈► মাগরিব: ${timings.Maghrib}\n\n╰┈► ইশা: ${timings.Isha}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n╰┈► ইমসাক: ${timings.Imsak}\n\n╰┈► মধ্যরাত: ${timings.Midnight}\n\n───※ ·SHAON PROJECT· ※───`;

    return api.sendMessage(
      {
        body: msg,
        attachment: videoReadStream,
      },
      event.threadID,
      event.messageID
    );
  } catch (error) {

    console.error("❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀:", error);
    return api.sendMessage("❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", event.threadID, event.messageID);
  }
};