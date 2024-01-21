  module.exports.config = {
    name: "ytmp3", 
    version: "1.0.0", 
    permission: 0,
    credits: "Shaon Ahmed",
    usePrefix: false,
    description: "Random Status video",
    commandCategory: "Media", 
    usages: "user", 
    cooldowns: 5,
    dependencies: []
};

module.exports.run = async function ({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const content = args.join(" ");

    const waitingMessage = `𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗔𝘂𝗱𝗶𝗼 𝗶𝘀 𝗕𝗲𝗶𝗻𝗴 𝗣𝗿𝗼𝗰𝗲𝘀𝘀𝗲𝗻𝗱 𝗣𝗹𝗲𝗮𝘀𝗲 𝗪𝗮𝗶𝘁: 😊`;


    const waitingMessageInfo = await api.sendMessage({
        body: waitingMessage,
        attachment: fs.createReadStream(__dirname + "/cache/thumbnail.jpg")
    }, event.threadID);

    try {
        const res = await axios.get(`https://trans.mohammad-rahad.repl.co/convert?video=${content}`);
        const data = res.data.Data;

        const audioLink = data.mp3;
        const title = data.title;
        const author = data.auther;
        const thumbnailLink = data["Thumbnail link"];

        const msg = `𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗔𝘂𝗱𝗶𝗼 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 \n\n𝗧𝗶𝘁𝗹𝗲: ${title}\n𝗔𝘂𝘁𝗵𝗲𝗿: ${author}`;


        const thumbnailBuffer = await axios.get(thumbnailLink, { responseType: 'arraybuffer' });
        fs.writeFileSync(__dirname + "/cache/thumbnail.jpg", Buffer.from(thumbnailBuffer.data, "utf-8"));


        await new Promise(resolve => setTimeout(resolve, 3000));


        api.unsendMessage(waitingMessageInfo.messageID);


        const audioBuffer = await axios.get(audioLink, { responseType: 'arraybuffer' });
        fs.writeFileSync(__dirname + "/cache/audio.mp3", Buffer.from(audioBuffer.data, "utf-8"));


        api.sendMessage({
            body: msg,
            attachment: fs.createReadStream(__dirname + "/cache/audio.mp3"),
            mentions: [
                {
                    tag: author,
                    id: author
                }
            ]
        }, event.threadID);
    } catch (error) {

        console.error(error);


        api.sendMessage("❐ 𝚂𝙷𝙰𝙾𝙽 6𝚇 𝚂𝙴𝚁𝚅𝙴𝚁 𝙱𝚄𝚂𝚈 𝙽𝙾𝚆 💔🥀", event.threadID);
    }
};